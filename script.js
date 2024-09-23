window.addEventListener('load', function() {
    
    const profileImage = document.querySelector('.sidebar .profile img');
    
    setTimeout(() => {
        profileImage.classList.add('animate');
    }, 500);
});

window.onload = function() {
    document.querySelector('.home h1').classList.add('show');
    document.querySelector('.home p').classList.add('show');
};