<script setup>
function enviaInfo(valor1, valor2, valor3) {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "POST",
    "http://localhost/DWES/VT11/APIREST/webService/controller/pokemon.php?op=Insert",
    true
  ); // Hacemos la petición por POST
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      alert("Insertado");
    } else {
      console.log("Cargando EnviaUno");
    }
  };
  xhr.send(
    '{"nombre" : "' +
      valor1 +
      '", "numero" : ' +
      valor2 +
      ', "tipo" : "' +
      valor3 +
      '"}'
  );
}
</script>

<template>
  <main class="container">
    <div class="messages" id="mensajes">
      <div class="received" id="mensajes-recibidos"></div>
    </div>
    <div class="inputs">
      <input type="submit" name="Enviar" />
    </div>
  </main>
</template>

<style>
@import "./assets/base.css";
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}

.container {
  display: grid;
  grid-template-rows: 70% 30%;
  height: 100vh;
  width: 100vw;
  background-color: rgb(255, 255, 255);
  font-weight: normal;
}

.messages {
  background-color: rgb(224, 224, 224);
}

.received {
  height: 90%;
  width: 90%;
}

.inputs {
  background-color: bisque;
}

input {
  width: 10rem;
  height: 3rem;
  margin: 1.5rem;
}
</style>
