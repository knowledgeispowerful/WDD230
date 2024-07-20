document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('menu');
    const navigation = document.getElementById('navigation');

    hamburger.addEventListener('click', () => {
        navigation.classList.toggle('active');
        hamburger.classList.toggle('active');
        if (hamburger.classList.contains('active')) {
            hamburger.textContent = '❌';
        } else {
            hamburger.textContent = '☰';
        }
    });
});
