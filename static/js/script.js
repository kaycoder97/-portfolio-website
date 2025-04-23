document.addEventListener('DOMContentLoaded', () => {
    const roles = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const roleElement = document.createElement('p');
    roleElement.className = 'text-xl md:text-2xl mb-6 text-gray-300';
    document.querySelector('#home .container').insertBefore(roleElement, document.querySelector('#home .btn-hover'));

    function type() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        } else {
            roleElement.textContent = currentRole.substring(0, charIndex++);
            if (charIndex > currentRole.length) {
                isDeleting = true;
                charIndex = currentRole.length;
            }
        }
        setTimeout(type, isDeleting ? 50 : 100);
    }
    type();
});