
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    const closeIcon = document.querySelector('.navbar-close-icon');
    const hamburgerIcon = document.querySelector('.navbar-toggle-icon');
    const menuItems = document.querySelectorAll('.navbar-menu a'); //any navbar item
  
    function showMenu() {
        menu.classList.add('active');
        console.log('added active')
        hamburgerIcon.style.display = 'none'; // Hide hamburger icon
        closeIcon.style.display = 'block';    // Show close icon
    }

    function hideMenu() {
        console.log('hide')
        menu.classList.remove('active');
        console.log(menu.classList)
        hamburgerIcon.style.display = 'block'; // Show hamburger icon
        closeIcon.style.display = 'none';      // Hide close icon
    }

    function toggleMenu() {
        if (menu.classList.contains('active')) {
            console.log('close')
            hideMenu();
        } else {
            showMenu();
            console.log('open')
        }
    }

    function handleMenuItemClick(){
        hideMenu();
    }

    if (toggleButton && menu && hamburgerIcon) {
        toggleButton.addEventListener('click', toggleMenu);
    }
    else {
        console.error('Navbar toggle button or menu not found.');
    }

    menuItems.forEach(item => {
        item.addEventListener('click', handleMenuItemClick);
    })
});
