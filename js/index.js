function setActiveLink(event, element) {
    event.preventDefault();
    

    const links = document.querySelectorAll('.links');
    links.forEach(link => link.classList.remove('active'));
    
    const target = element.getAttribute("href");
    document.querySelector(target).scrollIntoView({
        behavior: "smooth"
    });
    

    element.classList.add('active');
}

const themeToggle = document.querySelector('#theme-toggle');
const body = document.querySelector('body');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
})

window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let homeSection = document.getElementById('home');
    let headerHeight = header.offsetHeight;

    let homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;

    if (window.pageYOffset > homeSectionBottom - headerHeight) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled')
    }
})

document.getElementById("menu-toggle").addEventListener("click", function() {
    let mobileMenuSidebar = document.querySelector(".mobile-menu-sidebar");
    mobileMenuSidebar.classList.toggle("active");
  
    let closeIcon = document.querySelector(".close-icon");
    closeIcon.addEventListener("click", function() {
      mobileMenuSidebar.classList.remove("active");
    });
  });
  
  
  document.querySelectorAll(".mobile-menu li a").forEach(function(link) {
    link.addEventListener("click", function() {
      let mobileMenuSidebar = document.querySelector(".mobile-menu-sidebar");
      mobileMenuSidebar.classList.remove("active");
    });
  });