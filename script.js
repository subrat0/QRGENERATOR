// For smooth scrolling on older browsers if needed
  document.querySelector('.get-started-btn').addEventListener('click', () => {
    document.getElementById("service-head").scrollIntoView({ behavior: 'smooth' });
  });


//   hamburger par click krne par kya hoga uska code
let nav = document.querySelectorAll("nav");

let hambur = document.getElementById("hamburger")

hambur.addEventListener("click", () => {
    
    if(nav[0].style.display== "flex")
    {
        nav.forEach(navs => {
            navs.style.display = "none";
          });
    }
    else{
    nav.forEach(navs => {
        navs.style.display = "flex";
      });
    }
  });

  const hamburger = document.getElementById('hamburger');
  const icon = hamburger.querySelector('.swallow__icon');

  icon.addEventListener('click', () => {
    icon.classList.toggle('active');
  });

  AOS.init({
    duration: 800,
    once: true
  });
