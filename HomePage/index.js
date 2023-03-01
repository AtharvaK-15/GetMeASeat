const navBtn = document.querySelector("#menu");

navBtn.addEventListener('click',()=>{
    const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
    navBtn.setAttribute('aria-expanded',!isExpanded);
})