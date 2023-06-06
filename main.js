// toggle scroll navbar

const myNav = document.getElementById('header');
const headerHeight = myNav.offsetHeight; // mengambil tinggi elemen header
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', handleScroll);

function setActiveLink(link) {
    links.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
}

function handleScroll() {
    if (window.scrollY > 100) {
        myNav.classList.add('header-scrolled');
    } else {
        myNav.classList.remove('header-scrolled');
    }
    const scrollPosition = window.scrollY + headerHeight; // menghitung posisi scroll dengan memperhitungkan offset header

    sections.forEach((section) => {
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            const targetLink = document.querySelector(`[href='#${id}']`);
            if (targetLink) {
                setActiveLink(targetLink);
            }
        }
    });
}


