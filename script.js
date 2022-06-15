var btn= document.getElementById('btn'),
    caja= document.getElementById('caja'),
    contador=1;


function cambio ()

{
  if(contador==0)
    {
      
      contador=1;
      document.getElementById("btn").innerHTML= "traducir a  inglés";
      document.getElementById("saludo").innerHTML= "Hola!";
      document.getElementById("caja").innerHTML= "Somos BIXHANA, productores de este huevo y tenemos un mensaje para ti.";
      document.getElementById("nombre").innerHTML= "Inserta tu primer nombre:";
      document.getElementById("btn2").innerHTML= "Descubre el mensaje";
      
    }
  else {
    
    contador=0;
    
    document.getElementById("btn").innerHTML= "translate to spanish";
    document.getElementById("saludo").innerHTML= "Hi!";
    document.getElementById("caja").innerHTML= "I'm the producer of these eggs and I have a message for you.";
    document.getElementById("nombre").innerHTML= "Insert your first name:";
    document.getElementById("btn2").innerHTML= "Discover the message";
      }
}



btn.addEventListener('click',cambio,false);
