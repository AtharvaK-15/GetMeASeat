const navBtn = document.querySelector("#navbar-search");

navBtn.addEventListener('click',()=>{
    const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
    navBtn.setAttribute('aria-expanded',!isExpanded);
})