// projects------------->>>>>>>>>



const filterButtons = document.querySelectorAll('.filter .btn');
const projects = document.querySelectorAll('.project-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.getAttribute('data-filter');
    
    projects.forEach(project => {
      if (filter === 'all' || project.classList.contains(filter)) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});


const openModalButtons = document.querySelectorAll('.open-modal');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.modal .close');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'flex';
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', event => {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});





// Contact-Form------------



function validateForm() {

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let nameRegex = /^[a-zA-Z ]{2,30}$/;  
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  


  if (!nameRegex.test(name)) {
    alert("Please enter a valid name (letters only, 2-30 characters).");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (message.length < 10) {
    alert("Your message should be at least 10 characters long.");
    return false;
  }

  return true;  
}



// Dark Mode---------------


const modeButton = document.querySelector('.mode');

modeButton.addEventListener('click', () => {

  document.body.classList.toggle('dark-mode');
  

  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('dark-mode');
  

  const footer = document.querySelector('footer');
  footer.classList.toggle('dark-mode');

  const basicinfo = document.querySelector('.basic_info');
  footer.classList.toggle('dark-mode');


  const contactContainer = document.querySelector('#contact');
  if (contactContainer) {
    contactContainer.classList.toggle('dark-mode');
  }


  if (document.body.classList.contains('dark-mode')) {
    modeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    modeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});
