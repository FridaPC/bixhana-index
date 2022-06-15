var btn= document.getElementById('btn'),
    caja= document.getElementById('caja'),
    contador=1;


function cambio ()

{
  if(contador==0)
    {
      
      contador=1;
      document.getElementById("btn").innerHTML= "traducir a zapoteco";
      document.getElementById("saludo").innerHTML= "Hola!";
      document.getElementById("caja").innerHTML= "Somos BIXHANA, productores de este huevo y tenemos un mensaje para ti.";
      
    }
  else {
    
    contador=0;
    
    document.getElementById("btn").innerHTML= "traducir a español";
    document.getElementById("saludo").innerHTML= "Padiuxhi!";
    document.getElementById("caja").innerHTML= "Nacadu BIXHANA cayunidu\' dxiña, hrutoodo dxita bere cadi dagu yoo ne napadu shisha gabidu lii";
      }
}



btn.addEventListener('click',cambio,false);

