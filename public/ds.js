const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");


//  const location = path.join(__dirname,"./public");

// app.use(express.static(location));
//app.set("view engine", "hbs")


//show sidebar
menuBtn.addEventListener('click',() =>
{
    sideMenu.style.display='block'; 
})

//close sidebar
closeBtn.addEventListener('click',() =>{
    sideMenu.style.display='none';
})


//change theme
themeToggler.addEventListener('click',() =>
{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').
    classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').
    classList.toggle('active');
})



function updateText() {
    const textElement = document.getElementById('timeDateText');
    const currentTime = new Date();
    
    const options = { month: 'long',day: 'numeric', year: 'numeric',  hour: 'numeric', minute: 'numeric', second: 'numeric' };
    //const day = {weekday: 'long'} 
    const formattedDay = currentTime.toLocaleDateString('en-US')
    const formattedTime = currentTime.toLocaleDateString('en-US',options);
    textElement.textContent = formattedDay+ '\n' +formattedTime;
}  


//////////////////////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function () {
    const taskBtn = document.querySelector('.task-btn');
    const taskDropdown = document.querySelector('.task-dropdown');
    let isDropdownOpen = false;

    // Function to toggle task dropdown
    taskBtn.addEventListener('click', function (event) {
        event.preventDefault();
        isDropdownOpen = !isDropdownOpen;
        if (isDropdownOpen) {
            taskDropdown.style.display = 'block';
        } else {
            taskDropdown.style.display = 'none';
        }
    });

    // Close the task dropdown when clicking anywhere else
    document.addEventListener('click', function (event) {
        if (isDropdownOpen && !event.target.closest('.task-dropdown') && !event.target.closest('.task-btn')) {
            taskDropdown.style.display = 'none';
            isDropdownOpen = false;
        }
    });
});



//  selection highlight in the side bar 
document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    let selectedLink = null;

    // Function to handle link click
    function handleLinkClick(event) {
        if (selectedLink) {
            selectedLink.classList.remove('active');
        }
        event.currentTarget.classList.add('active');
        selectedLink = event.currentTarget;
    }

    // Add click event listener to each sidebar link
    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', handleLinkClick);
    });
});


////////////////////////////////////////////logout logic//////////
document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.querySelector('.logout');

    // Function to handle logout
    function logout() {
        // Here, you can perform logout actions like clearing the session or token.
        // For example, if using localStorage for authentication token:
        localStorage.removeItem('authToken'); // Remove the authentication token

        // Redirect to the login page
        window.location.href = '/'; // Replace '/login' with your login page URL
    }

    // Attach the logout function to the logout button click event
    logoutButton.addEventListener('click', function (event) {
        event.preventDefault();
        logout(); // Call the logout function when the button is clicked
    });
});






 /////////////////////////////////////////////////////////
 
 /*
 document.addEventListener('DOMContentLoaded', function() {
    const addTaskLink = document.getElementById('add-task-link');

    if (addTaskLink) {
        addTaskLink.addEventListener('click', function(event) {
            event.preventDefault();
            // Redirect to the "Add New Task" page
            window.location.href = '/sideinput';
        });
    }
});

*/



/////////////////////////////////date////////////////////////////////////

    
    document.addEventListener('DOMContentLoaded', function () {
        // Get the current date
        var currentDate = new Date();

        // Get day, month, and year components
        var day = currentDate.getDate();
        var monthIndex = currentDate.getMonth(); // 0-based index
        var year = currentDate.getFullYear();

        // Array to map month index to month names
        var monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        // Create a string with the current date format
        var dateString = day + " " + monthNames[monthIndex] + " " + year;

        // Display the formatted date in the designated div
        var currentDateElement = document.getElementById('current-date');
        currentDateElement.textContent = dateString;
    });


//////////////////////////////////////day/////////////////////////////////////////////////
  document.addEventListener('DOMContentLoaded', function () {
        // Define an array to map day indices to day names
        var dayNames = [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ];

        // Get the current date
        var currentDate = new Date();

        // Get the day index (0 to 6, where 0 is Sunday, 1 is Monday, etc.)
        var dayIndex = currentDate.getDay();

        // Get the day name from the array using the day index
        var currentDay = dayNames[dayIndex];

        // Display the current day in the designated div
        var currentDayElement = document.getElementById('current-day');
        currentDayElement.textContent = currentDay;
    });

    
      

    /////////////////////////////////signin logic////////////////////////////////////////////////
    function updateClock() {
        // ... (Existing code to display the live timer)
         var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        // Format the time components to always have two digits
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }


        // Display the formatted time in the designated div
        var timerElement = document.getElementById('live-timer');
        timerElement.textContent = hours + " : " + minutes + " : " + seconds;
    }

    // Update the clock every second (1000 milliseconds)
    setInterval(updateClock, 1000);

    // Run the initial update
    updateClock();

    document.addEventListener("DOMContentLoaded", function () {
        // Get a reference to the sign-in button
        const signInButton = document.getElementById("sign-in-button");
        const logoutButton = document.getElementById("logout-button"); // Add reference to the logout button
        
        let isLoggedIn = false; // Initialize the login state flag
        
        // Add a click event listener to the sign-in button
        signInButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default form submission behavior
        
            if (!isLoggedIn) { // If not logged in, perform sign-in action
                const currentDate = new Date();
                const year = currentDate.getFullYear();
                const month = String(currentDate.getMonth() + 1).padStart(2, '0');
                const day = String(currentDate.getDate()).padStart(2, '0');
                const hours = String(currentDate.getHours()).padStart(2, '0');
                const minutes = String(currentDate.getMinutes()).padStart(2, '0');
                const seconds = String(currentDate.getSeconds()).padStart(2, '0');
                
                const signInTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
                
                fetch("/signin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ signInTime }),
                })
                .then((response) => response.json())
                .then((data) => {
                    // Handle the response from the server if needed
                    console.log("Sign-in time sent to the server successfully.");
                    isLoggedIn = true; // Update login state flag
                    signInButton.textContent = "Logout"; // Change button text to "Logout"
                    logoutButton.style.display = "inline-block"; // Show the logout button
                })
                .catch((error) => {
                    console.error("Error sending sign-in time to the server:", error);
                });
            } 
        });
        
        // Function to handle the "Logout" action
        function handleLogout() {
            // Implement your logout logic here...
            // For example, you can send the logout time to the server and handle the response.
    
            // Calculate logoutTime within this function
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            const hours = String(currentDate.getHours()).padStart(2, '0');
            const minutes = String(currentDate.getMinutes()).padStart(2, '0');
            const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    
            const logoutTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            
            // Send the logout time to the server using an HTTP request (e.g., fetch)
            fetch("/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ logoutTime }),
            })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server if needed
                console.log("Logout time sent to the server successfully.");
                isLoggedIn = false;
                signInButton.textContent = "Sign In";
                logoutButton.style.display = "none";
            })
            .catch((error) => {
                console.error("Error sending logout time to the server:", error);
            });
        }
    
        // Add click event listeners to the buttons
        signInButton.addEventListener("click", function () {
            if (isLoggedIn) {
                handleLogout();
            } else {
                handleSignIn();
            }
        });
    
        logoutButton.addEventListener("click", handleLogout);
    });
    


///////////////////////////////////user name////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the user name placeholder element
    const userNamePlaceholder = document.getElementById('user-name-placeholder');

    // Make a GET request to retrieve the user's name
    fetch('/getUserName')
        .then((response) => response.json())
        .then((data) => {
            console.log('Received data from the server:', data); // Add this line for debugging

            if (data.success) {
                // Update the content of the placeholder with the user name
                userNamePlaceholder.textContent = data.name;
            } else {
                // Handle the case where the user's name was not found or other errors
                userNamePlaceholder.textContent = 'User not found';
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            userNamePlaceholder.textContent = 'Error fetching user name';
        });
});


/////////////////////////side input//////////////////////
// JavaScript code to toggle the visibility of the "side input" module
const addTaskLink = document.querySelector('#add-task-link');
const sideInputContainer = document.querySelector('#side-input-container');
const submitButton = document.querySelector('#submit-button');
const backButton = document.querySelector('#back-button');

let isSideInputOpen = false; // Track the state of the side input

addTaskLink.addEventListener('click', function(event) {
    event.preventDefault();
    if (!isSideInputOpen) {
        showSideInput(); // Show the "side input" module
    } else {
        hideSideInput(); // Hide the "side input" module if it's already open
    }
});

// Function to show the "side input" module
function showSideInput() {
    sideInputContainer.style.width = '23%'; // Set the width to make it visible
    submitButton.style.display = 'block'; // Display the Submit button

    isSideInputOpen = true; // Update the state

    // Add a click event listener to the document to close the side input when clicking outside
    document.addEventListener('mouseup', clickOutsideHandler);
}

// Function to hide the "side input" module
function hideSideInput() {
    sideInputContainer.style.width = '0'; // Set the width to 0 to hide it
    submitButton.style.display = 'none'; // Hide the Submit button

    isSideInputOpen = false; // Update the state

    // Remove the click event listener from the document
    document.removeEventListener('mouseup', clickOutsideHandler);
}

// Event handler to close the side input when clicking outside
function clickOutsideHandler(event) {
    if (!sideInputContainer.contains(event.target)) {
        hideSideInput();
    }
}

backButton.addEventListener('click', function(event) {
    event.preventDefault();
    hideSideInput(); // Hide the "side input" module when Back button is clicked
});

document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'dash';
});






///////////////////////////side input data to serve side////////////////////////////////////
document.getElementById('side-input-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const formData = new FormData(this);

    // Convert the form data to a JSON object
    const formDataJson = {};
    formData.forEach((value, key) => {
        formDataJson[key] = value;
    });

    // Send the form data to the server using Fetch API or another AJAX method
    fetch('/sideinput', {
        method: 'POST', // Use the appropriate HTTP method (POST, PUT, etc.)
        headers: {
            'Content-Type': 'application/json', // Set the content type
        },
        body: JSON.stringify(formDataJson), // Convert the JSON object to a string
    })
    .then(response => {
        if (response.ok) {
            // Handle the successful response from the server
            console.log('Data sent successfully');

            // Clear the form fields
            this.reset(); // 'this' refers to the form element

            // Navigate to the dashboard screen (change the URL as needed)
            window.location.href = 'dash';
        } else {
            // Handle errors here
            console.error('Error sending data to the server');
        }
    })
    .catch(error => {
        // Handle network errors here
        console.error('Network error:', error);
    });
});


/////////////////////////////session ok button ///////////////////////////////////////////////////
 


  /////////////////////////////session time out logic////////////////////////////////////////
// Check for session timeout every 10 seconds (adjust as needed)
const checkSessionTimeout = () => {
    const sessionTimeoutMessage = document.getElementById('session-timeout-message');
    const sessionTimeoutInMilliseconds = 300000; // 5 minute in milliseconds

    // Set a timer to check session timeout
    const timer = setInterval(() => {
        const lastActivityTimestamp = new Date(sessionStorage.getItem('lastActivityTimestamp') || 0).getTime();
        const currentTime = new Date().getTime();

        if (currentTime - lastActivityTimestamp >= sessionTimeoutInMilliseconds) {
            // Session has timed out
            sessionTimeoutMessage.style.display = 'block';
            clearInterval(timer); // Stop checking for session timeout
        }
    }, 10000); // Check every 10 seconds (adjust as needed)

    // Refresh the page when the message is clicked
    sessionTimeoutMessage.addEventListener('click', () => {
        window.location.href = "/";
    });
};

// Initialize the session timeout checker
checkSessionTimeout();

// Update the last activity timestamp in sessionStorage when there's user activity
document.addEventListener('mousemove', () => {
    sessionStorage.setItem('lastActivityTimestamp', new Date().toString());
});

// Add an event listener to the "OK" button to prevent page refresh
const okButton = document.getElementById('OK-button');
okButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    window.location.href = "/";
});

// Check if the user is already logged in and disable session timeout if so
const isLoggedIn = sessionStorage.getItem('isLoggedIn');
if (isLoggedIn === 'true') {
    // User is already logged in, disable session timeout
    const sessionTimeoutMessage = document.getElementById('session-timeout-message');
    sessionTimeoutMessage.style.display = 'none';
}

// Set a flag in sessionStorage to indicate that the user is logged in
sessionStorage.setItem('isLoggedIn', 'true');


///////////////////////////FETCH DATA//////////////////////////////////////
// Use JavaScript to fetch data and populate the table
fetch('/get-data')
.then(response => response.json())
.then(data => {
    const tableBody = document.getElementById('data-table-body');
    data.forEach(item => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = item.Date;
        row.insertCell(1).textContent = item.ConsultantName;
        row.insertCell(2).textContent = item.TicketNumber;
        row.insertCell(3).textContent = item.TypeOfTicket;
        row.insertCell(4).textContent = item.ProcessDocumentRevision;
        row.insertCell(5).textContent = item.Status;
        row.insertCell(6).textContent = item.FromTime;
        row.insertCell(7).textContent = item.ToTime;
        row.insertCell(8).textContent = item.TicketAssignedDate;
        row.insertCell(9).textContent = item.BriefDetails;
    });
})
.catch(error => console.error('Error:', error));