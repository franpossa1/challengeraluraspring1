window.onload = function(){

  document.getElementById("btn-copy").addEventListener("click", clipboardCopy);
  async function clipboardCopy() {
      let text = document.getElementById("input-texto").value;
      await navigator.clipboard.writeText(text);
      document.getElementById("input-texto").value = "";
      document.getElementById("mensaje-texto").value = "";
      alert("Texto copiado!");
  }

  function criptografar(){

          let frase = textEntrada.value.toLowerCase();

          let textoEncriptado = frase
          .replaceAll("e", "enter")
          .replaceAll("i", "imes")
          .replaceAll("a", "ai")
          .replaceAll("o", "ober")
          .replaceAll("u","ufat");

          textSaida.value = textoEncriptado;

          document.getElementById("menino").style.display = "none";
          document.getElementById("text1").style.display = "none";
          document.getElementById("text2").style.display = "none";
          document.getElementById("mensaje-texto").style.display = "inline";
          document.getElementById("btn-copy").style.display = "inline";
      
  }

  function descriptografar(){

          let frase = textEntrada.value.toLowerCase();

          let textoDesencriptado = frase
          .replaceAll("enter", "e")
          .replaceAll("imes", "i")
          .replaceAll("ai", "a")
          .replaceAll("ober", "o")
          .replaceAll("ufat","u");

          textSaida.value = textoDesencriptado;

          document.getElementById("menino").style.display = "none";
          document.getElementById("text1").style.display = "none";
          document.getElementById("text2").style.display = "none";
          document.getElementById("mensaje-texto").style.display = "inline";
          document.getElementById("copiar-texto").style.display = "inline";
          
  }

  function verifica() {

      if (document.getElementById("input-texto").value === "") {
          document.getElementById("copiar-texto").style.display = "none";
          document.getElementById("mensaje-texto").style.display = "none";
      } 
  }

  let textEntrada = document.getElementById("input-texto");
  let textSaida = document.getElementById("mensaje-texto");

  let buttonEncriptado = document.getElementById("btn-encriptar");
  let buttonDesencriptado = document.getElementById("btn-desencriptar");
  let buttonCopiar = document.getElementById("btn-copy");
  verifica();

  buttonEncriptado.onclick = criptografar;
  buttonDesencriptado.onclick = descriptografar;

}