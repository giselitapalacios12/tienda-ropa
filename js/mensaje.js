const app = document.getElementById('typewriter');
const diseño = document.getElementById('diseño2')

const typewriter = new Typewriter(app,{
    loop:true,
    delay:75
});

typewriter
.typeString('Diseñando e innovando modelos exclusivos para cada temporada ')
.pauseFor(200)
.start();
