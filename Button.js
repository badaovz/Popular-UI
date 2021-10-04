const com = document.querySelector('.component');
const but = document.querySelector('.but');

com.addEventListener('click', ()=>{
    com.classList.toggle('active');
    setTimeout(()=>{
        com.classList.remove('active');
        com.querySelector('#cloud').classList.replace('bx-cloud-download', 'bx-check-circle')
        but.innerHTML = 'Completed'
    }, 6000)
});



