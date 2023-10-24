document.addEventListener('DOMContentLoaded', function() {
    const showPopupIcon1 = document.getElementById('showPopupIcon1');
    const showPopupIcon2 = document.getElementById('showPopupIcon2');
    const loginPopup = document.getElementById('loginPopup');
    let isPopupVisible = false;

    // Function to toggle the login popup
    function toggleLoginPopup() {
        if (isPopupVisible) {
            loginPopup.style.display = 'none';
        } else {
            loginPopup.style.display = 'block';
        }

        isPopupVisible = !isPopupVisible;
    }

    // Add click event listeners to both icons
    showPopupIcon1.addEventListener('click', toggleLoginPopup);
    showPopupIcon2.addEventListener('click', toggleLoginPopup);
});
