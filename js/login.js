// role switch
const roleBtns = document.querySelectorAll('.role-btn');

roleBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    roleBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// fake submit (backend later)
document.getElementById('loginForm').addEventListener('submit',e=>{
  e.preventDefault();
  alert("Backend connection will be added next.");
});
