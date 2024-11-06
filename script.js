// Function to update the current time on the page
function updateTime() {
    // Get the current date and time
    const now = new Date();
    // Get the current hours, minutes, and seconds with leading zeros
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    // Update the element with id 'current-time' to display the current time
    document.getElementById('current-time').textContent = `Current time: ${hours}:${minutes}:${seconds}`;
}
// Update the time every second
setInterval(updateTime, 1000);

// Function to change the background color to a random color from an array
const colors = ['#483D8B', '#A0522D', '#477575', '#c98c8c']; // Array of color options
document.getElementById('change-bg').addEventListener('click', () => {
    // Set background color to a random choice from the colors array
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

// Object to store and display a list of hobbies
const hobbies = {
    list: [
        { name: "Reading Books", description: "Books bring meaning to life." },
        { name: "Playing Sports", description: "Sports help us stay active." },
        { name: "Programming", description: "Coding and solving problems." }
    ],
    // Method to display hobbies on the page
    displayHobbies() {
        const hobbiesContainer = document.getElementById('hobbies-container');
        // Generate HTML for each hobby and insert it into the container
        hobbiesContainer.innerHTML = this.list
            .map(hobby => `<p><strong>${hobby.name}</strong>: ${hobby.description}</p>`)
            .join('');
    }
};
// Display hobbies when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    hobbies.displayHobbies();
});

// Function to sort a list of numbers in ascending or descending order
function sortNumbers(order) {
    // Get the value from the input field and convert it to an array of numbers
    const input = document.getElementById('numbers-input').value;
    const numbers = input.split(',').map(num => parseFloat(num)).filter(num => !isNaN(num));
    // Sort the numbers based on the specified order
    const sorted = numbers.sort((a, b) => (order === 'asc' ? a - b : b - a));
    // Display the sorted list in the output element
    document.getElementById('sorted-output').textContent = `Sorted (${order === 'asc' ? 'Ascending' : 'Descending'}): ${sorted.join(', ')}`;
}

// Attach event listeners to sorting buttons for ascending and descending sort
document.getElementById('sort-asc').addEventListener('click', () => sortNumbers('asc'));
document.getElementById('sort-desc').addEventListener('click', () => sortNumbers('desc'));

// To-Do List functionality: Add a new task with an animation
document.getElementById('add-task-btn').addEventListener('click', () => {
    const newTaskInput = document.getElementById('new-task-input');
    const newTaskValue = newTaskInput.value.trim();
    // Check if input is not empty before adding a task
    if (newTaskValue) {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        newTask.innerHTML = `
      <input type="checkbox">
      <label>${newTaskValue}</label>
      <button class="delete-btn">Delete</button>
    `;
        // Animate task appearance
        newTask.style.opacity = 0;
        taskList.appendChild(newTask);
        setTimeout(() => {
            newTask.style.transition = 'opacity 0.5s';
            newTask.style.opacity = 1;
        }, 10);
        // Clear the input field
        newTaskInput.value = '';
        // Add event listener to delete button to remove task
        newTask.querySelector('.delete-btn').addEventListener('click', () => {
            taskList.removeChild(newTask);
        });
    }
});

// Function to filter tasks in the to-do list based on search input
function filterTasks() {
    const searchInput = document.getElementById('search-task-input').value.toLowerCase();
    const tasks = Array.from(document.querySelectorAll('#task-list li'));
    // Show tasks that include the search term; hide others
    tasks.forEach(task => {
        const taskText = task.querySelector('label').textContent.toLowerCase();
        task.style.display = taskText.includes(searchInput) ? '' : 'none';
    });
}
// Attach filter function to input event on the search field
document.getElementById('search-task-input').addEventListener('input', filterTasks);

// Function to toggle between dark and light themes
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('light-theme'); // Toggles the 'light-theme' class
});

// Sound functionality: Play a click sound when any button is clicked
const buttonClickSound = new Audio('button-click.mp3');

function playClickSound() {
    buttonClickSound.currentTime = 0; // Reset sound to start if interrupted
    buttonClickSound.play(); // Play sound
}
// Attach playClickSound function to all button click events
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', playClickSound);
});

// Initialize the time display on page load
updateTime();

// Event to show the current date in an alert when button is clicked
document.getElementById('show-date').addEventListener('click', function () {
    const date = new Date(); // Get current date
    const formattedDate = date.toLocaleDateString(); // Format date in readable format
    alert(`Current Date: ${formattedDate}`); // Show date in alert
});

// Function to translate the page content to the specified language
function translatePage(language) {
    const translations = {
        ru: {
            title: "Контактная информация",
            buttonShowDate: "Показать дату",
            buttonChangeBg: "Сменить фон",
            name1: "Ян:",
            name2: "Дмитрий:",
            name3: "Диас:",
            footerText: "&copy; 2024 Наша личная страница"
        },
        en: {
            title: "Contact Information",
            buttonShowDate: "Show Date",
            buttonChangeBg: "Change BG Color",
            name1: "Yan:",
            name2: "Dmitriy:",
            name3: "Dias:",
            footerText: "&copy; 2024 Our Personal Webpage"
        }
    };

    const elementsToTranslate = {
        mainTitle: document.getElementById("main-title"),
        buttonShowDate: document.getElementById("show-date"),
        buttonChangeBg: document.getElementById("change-bg"),
        name1: document.querySelector(".person:nth-child(1) h2"),
        name2: document.querySelector(".person:nth-child(2) h2"),
        name3: document.querySelector(".person:nth-child(3) h2"),
        footerText: document.querySelector("footer p")
    };

    const translation = translations[language];

    if (!translation) {
        console.error("Translation not found for language:", language);
        return;
    }

    // Assign translations if element exists
    if (elementsToTranslate.mainTitle) elementsToTranslate.mainTitle.textContent = translation.title;
    if (elementsToTranslate.buttonShowDate) elementsToTranslate.buttonShowDate.textContent = translation.buttonShowDate;
    if (elementsToTranslate.buttonChangeBg) elementsToTranslate.buttonChangeBg.textContent = translation.buttonChangeBg;
    if (elementsToTranslate.name1) elementsToTranslate.name1.textContent = translation.name1;
    if (elementsToTranslate.name2) elementsToTranslate.name2.textContent = translation.name2;
    if (elementsToTranslate.name3) elementsToTranslate.name3.textContent = translation.name3;
    if (elementsToTranslate.footerText) elementsToTranslate.footerText.innerHTML = translation.footerText;
}

// Run updateTime() and set an interval to update the time every second on page load
document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 1000);
});
