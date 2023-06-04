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