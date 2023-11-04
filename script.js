  function saveDarkModePreference() {
            const darkModeCheckbox = document.getElementById('darkMode');
            const isDarkMode = darkModeCheckbox.checked;
            localStorage.setItem('darkMode', isDarkMode);
        }

        // Function to load the dark mode preference from Local Storage
        function loadDarkModePreference() {
            const darkModeCheckbox = document.getElementById('darkMode');
            const isDarkMode = localStorage.getItem('darkMode');

            if (isDarkMode === 'true') {
                darkModeCheckbox.checked = true;
                document.body.classList.add('dark-mode');
            } else {
                darkModeCheckbox.checked = false;
                document.body.classList.remove('dark-mode');
            }
        }

        // Event listener for form submission
        const darkModeForm = document.getElementById('darkModeForm');
        darkModeForm.addEventListener('submit', function (e) {
            e.preventDefault();
            saveDarkModePreference();
        });

        // Load the dark mode preference on page load
        loadDarkModePreference();