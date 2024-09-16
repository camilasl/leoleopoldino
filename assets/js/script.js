const hamburger = document.getElementById("hamburger");
hamburger.addEventListener('click', abreMenu);

function abreMenu() {
    const navBar = document.getElementById("nav");
    navBar.classList.toggle("active");
}

const close = document.getElementById("close");
close.addEventListener('click', fechaMenu);

function fechaMenu() {
    const navBar = document.getElementById("nav");
    navBar.classList.remove("active");
}

// pega titulo do projeto 

let nameProject = document.querySelectorAll('.projectCover');
//console.log(nameProject);

for (var i = 0 ; i < nameProject.length; i++) {
    nameProject[i].addEventListener('click', (e) => {
        let positionClick = e.target;
        var titulo = positionClick.alt;
        localStorage.setItem('tituloQueSeraExibidoNaPag', titulo);
    })
}

// exibe titulo do projeto

var nomeProjeto = document.querySelector('#viewSessionStorage');
//console.log(nomeProjeto);
nomeProjeto.textContent = localStorage.getItem('tituloQueSeraExibidoNaPag');

