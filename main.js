// toggle scroll navbar
const myNav = document.getElementById('header');
const headerHeight = myNav.offsetHeight; // mengambil tinggi elemen header
let section = document.querySelectorAll('section');
let lists = document.querySelectorAll('.list');
window.onscroll = handleScroll;

function activeLink(li) {
    lists.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
}

function handleScroll() {
    if (window.scrollY > 100) {
        myNav.classList.add('header-scrolled');
    } else {
        myNav.classList.remove('header-scrolled');
    }
    const scrollPosition = window.scrollY + headerHeight; // menghitung posisi scroll dengan memperhitungkan offset header

    section.forEach(sec => {
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            const target = document.querySelector(`[href='#${id}']`).parentElement;
            activeLink(target);
        }
    });
}

