const button=document.querySelector('.language');
let english=false;
button.addEventListener('click',()=>{english=!english;document.documentElement.lang=english?'en':'es';document.querySelectorAll('[data-es]').forEach(el=>el.textContent=el.dataset[english?'en':'es']);button.innerHTML=english?'<span>ES</span> / <span class="active">EN</span>':'<span class="active">ES</span> / <span>EN</span>';});
