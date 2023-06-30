var idioma = 1;

function consola()
{

    document.getElementById("V").className = "parpadeo";
    
    setTimeout(() => {  document.getElementById("V").innerHTML = "V"; }, 3300);
    setTimeout(() => {  document.getElementById("V").className = ""; }, 3300);
    setTimeout(() => {  document.getElementById("I").innerHTML = "_"; }, 3300);
    
    setTimeout(() => {  document.getElementById("I").innerHTML = "I"; }, 3600);
    setTimeout(() => {  document.getElementById("S").innerHTML = "_"; }, 3600);
    
    setTimeout(() => {  document.getElementById("S").innerHTML = "S"; }, 3900);
    setTimeout(() => {  document.getElementById("I2").innerHTML = "_"; }, 3900);
    
    setTimeout(() => {  document.getElementById("I2").innerHTML = "I"; }, 4200);
    setTimeout(() => {  document.getElementById("T").innerHTML = "_"; }, 4200);
    
    setTimeout(() => {  document.getElementById("T").innerHTML = "T"; }, 4500);
    setTimeout(() => {  document.getElementById("A").innerHTML = "_"; }, 4500);
    
    setTimeout(() => {  document.getElementById("A").innerHTML = "A"; }, 4800);
    setTimeout(() => {  document.getElementById("N").innerHTML = "_"; }, 4800);
    
    setTimeout(() => {  document.getElementById("N").innerHTML = "N"; }, 5100);
    setTimeout(() => {  document.getElementById("T2").innerHTML = "_"; }, 5100);
    
    setTimeout(() => {  document.getElementById("T2").innerHTML = "T"; }, 5400);
    setTimeout(() => {  document.getElementById("E").innerHTML = "_"; }, 5400);
    
    setTimeout(() => {  document.getElementById("E").innerHTML = "E"; }, 5700);
    setTimeout(() => {  document.getElementById("GB").innerHTML = "_"; }, 5700);
    
    setTimeout(() => {  document.getElementById("continue").style.display = "block"; }, 6000);
}

function ocultar()
{
    document.getElementById("laterales").className = "laterales2";
    var intro = document.getElementById("intro");
    if(intro.style.display != 'none')
    {
        /*var sonido = document.getElementById("audio");
        sonido.play();*/
    }
    intro.style.opacity = 0;
    setTimeout(() => {  intro.style.display = 'none'; }, 800);
}

function dropdownmenu()
{
    var ancho = window.innerWidth;
    var estilo = document.getElementById("drme").className;
    if(estilo == "dropdown-menu-cerrado")
    {
        document.getElementById("drme").className = "dropdown-menu-abierto";
        if(ancho>960)
        {
            document.getElementById("principal").style.marginLeft ="250px";
            document.getElementById("principal").style.width = "72%"; 
        }
    }
    else
    {
        document.getElementById("drme").className = "dropdown-menu-cerrado";
        if(ancho>960)
        {
            setTimeout(() => {document.getElementById("principal").style.marginLeft ="0px";},200);
            setTimeout(() => {document.getElementById("principal").style.width = "100%";},200);
        }
    }
}

function opciones(id)
{
    var fondo = document.getElementById("titulo-cab");
    if(id == "opc1")
    {
        document.getElementById("ap1").style.display = "block";
        document.getElementById("ap2").style.display = "none";
        document.getElementById("ap3").style.display = "none";
        document.getElementById("ap4").style.display = "none";
        document.getElementById("ap5").style.display = "none";
        if(idioma == 1)
        {
            document.getElementById("cabecera").innerHTML = "Biografía";
        }
        else
        {
            document.getElementById("cabecera").innerHTML = "Biography";
        }
        fondo.style.background = "#023764";
    }
    
    if(id == "opc2")
    {
        document.getElementById("ap2").style.display = "flex";
        document.getElementById("ap1").style.display = "none";
        document.getElementById("ap3").style.display = "none";
        document.getElementById("ap4").style.display = "none";
        document.getElementById("ap5").style.display = "none";
        if(idioma == 1)
        {
            document.getElementById("cabecera").innerHTML = "Lenguajes Informáticos";
        }
        else
        {
            document.getElementById("cabecera").innerHTML = "Programming languages";
        }
        fondo.style.background = "#902626";
    }
    
    if(id == "opc3")
    {
        document.getElementById("ap3").style.display = "grid";
        document.getElementById("ap1").style.display = "none";
        document.getElementById("ap2").style.display = "none";
        document.getElementById("ap4").style.display = "none";
        document.getElementById("ap5").style.display = "none";
        if(idioma == 1)
        {
            document.getElementById("cabecera").innerHTML = "Proyectos";
        }
        else
        {
            document.getElementById("cabecera").innerHTML = "Projects";
        }
        fondo.style.background = "#027D29";
    }
    
    if(id == "opc4")
    {
        document.getElementById("ap4").style.display = "block";
        document.getElementById("ap1").style.display = "none";
        document.getElementById("ap2").style.display = "none";
        document.getElementById("ap3").style.display = "none";
        document.getElementById("ap5").style.display = "none";
        if(idioma == 1)
        {
            document.getElementById("cabecera").innerHTML = "Curriculum Vitae";
        }
        else
        {
            document.getElementById("cabecera").innerHTML = "Resume";
        }
        fondo.style.background = "#FFBD00";
    }
    
    if(id == "opc5")
    {
        document.getElementById("ap5").style.display = "block";
        document.getElementById("ap1").style.display = "none";
        document.getElementById("ap2").style.display = "none";
        document.getElementById("ap3").style.display = "none";
        document.getElementById("ap4").style.display = "none";
        if(idioma == 1)
        {
            document.getElementById("cabecera").innerHTML = "Contacto";
        }
        else
        {
            document.getElementById("cabecera").innerHTML = "Contact me";
        }
        fondo.style.background = "#77035F";
    }
    /*dropdownmenu();*/
}

function highlight(ID)
{
    if(ID == "whats")
    {
       document.getElementById("red3").src="img/whatsapp2.png";
    }
    if(ID == "github")
    {
       document.getElementById("red2").src="img/github2.png";
    }
    if(ID == "gmail")
    {
       document.getElementById("red1").src="img/gmail2.svg";
    }       
}

function normal(ID)
{
    if(ID == "whats")
    {
       document.getElementById("red3").src="img/whatsapp.png";
    }
    if(ID == "github")
    {
       document.getElementById("red2").src="img/github.png";
    }
    if(ID == "gmail")
    {
       document.getElementById("red1").src="img/google2.png";
    }   
}

function english()
{
    idioma = 2;
    traductor();
    /*Options*/
    document.getElementById("opc1").innerHTML = "Byography";
    document.getElementById("opc2").innerHTML = "Programming lang.";
    document.getElementById("opc3").innerHTML = "Projects";
    document.getElementById("opc4").innerHTML = "Resume";
    document.getElementById("opc5").innerHTML = "Contact me";
    
    /*Byography*/
    document.getElementById("presentacion").innerHTML = "My name is Fernando Daniel Martinez Sanchez, I'm an Engineer in communications and electronics who studied the computation speciality on this career, actually I work as a freelance developer and also, as a teacher in the same sobject, specially on the BackEnd area.";
    document.getElementById("presentacion2").innerHTML = "Due to my profession and personal experiences, I've learnt to apply the programmation logic, looking for different ways to solve a problem but always trying to do it in the most efficient way possible."
    document.getElementById("presentacion3").innerHTML = "About me, I really love to practice archery, doing exercise and also playing music and rythm games. I hope that this web helps you to know more abot me, thank you for your consideration."
    
    /*Programming languages*/
    document.getElementById("experiencia").innerHTML ="These are the programming languages with which I have the most experience, however, learning new languages is always interesting and, particularly, they become easier for me once I find the logic behind their operation and their instructions."
    
    /*Projects*/
    document.getElementById("projects").innerHTML = "Disney+ and CECyT19 websites were created by my own and are not related to the original ones."
    
    /*Resume*/
    document.getElementById("resume").src="media/CV23EN.pdf"
    
    /*Contact me*/
    document.getElementById("thanks").innerHTML="Thanks for your visit, you cand find my contact info here, hope to see you soon!"
    document.getElementById("opmail").innerHTML="Send me a mail"
    document.getElementById("ophub").innerHTML="Find my repositories"
    document.getElementById("opwhats").innerHTML="Or send me a DM!"
}

function spanish()
{
    idioma = 1;
    traductor();
    /*Options*/
    document.getElementById("opc1").innerHTML = "Biografía";
    document.getElementById("opc2").innerHTML = "Lenguajes inf.";
    document.getElementById("opc3").innerHTML = "Proyectos";
    document.getElementById("opc4").innerHTML = "Curriculum";
    document.getElementById("opc5").innerHTML = "Contacto";
    
    /*Byography*/
    document.getElementById("presentacion").innerHTML = "Mi nombre es Fernando Daniel Martínez Sánchez, Ing. en Comunicaciones y electrónica con especialidad de computación. Actualmente me desempeño como desarrollador freelance y profesor particular enfocado a lenguajes de backend como Python y C#.</p>";
    document.getElementById("presentacion2").innerHTML = "A través de mis experiencias profesionales y de la vida diaria en general, le he dado utilidad a la lógica programacional buscando diferentes métodos y procedimientos para resolver peticiones y /o problemas, siempre buscando la forma más eficiente posible."
    document.getElementById("presentacion3").innerHTML = "Respecto a mi, disfruto de practicar Tiro con arco, hacer ejercicio al aire libre y también jugar videojuegos de música y ritmo. Espero que a través de esta web pueda conocerme y agradezco de antemano su tiempo."
    
    /*Programming languages*/
    document.getElementById("experiencia").innerHTML ="Estos son los lenguajes de programación con los que tengo más experiencia, sin embargo, aprender nuevos lenguajes siempre es interesante y, particularmente se me facilitan una vez encuentro la lógica detrás de su funcionamiento y sus instrucciones."
    
    /*Projects*/
    document.getElementById("projects").innerHTML = "Los sitios Disney+ y CECyT19, del presente portafolio son ilustrativos y creados por mi, ajenos a los sitios originales."
    
    /*Resume*/
    document.getElementById("resume").src="media/CV23.pdf"
    
    /*Contact me*/
    document.getElementById("thanks").innerHTML="Agradezco tu tiempo y tu visita, te brindo mi información de contacto esperando verte pronto!"
    document.getElementById("opmail").innerHTML="Envíame un correo"
    document.getElementById("ophub").innerHTML="Encuentra mis repositorios"
    document.getElementById("opwhats").innerHTML="O envíame un mensaje directo!"
}

function traductor()
{
    var renombrar = document.getElementById("titulo-cab").textContent;
    if(renombrar == "Biografía" || renombrar == "Byography")
    {
        opciones("opc1");
    }
    if(renombrar == "Lenguajes inf-" || renombrar == "Programming languages")
    {
        opciones("opc2");
    }
    if(renombrar == "Proyectos" || renombrar == "Projects")
    {
        opciones("opc3");
    }
    if(renombrar == "Curriculum Vitae" || renombrar == "Resume")
    {
        opciones("opc4");
    }
    if(renombrar == "Contacto" || renombrar == "Contact me")
    {
        opciones("opc5");
    }
}