var ajax = new XMLHttpRequest();

const Obtener = () => {
  var url = "http://localhost:8888/cotizaciones/backend/obtenerProductos.php";
  ajax.open("GET", url, true);
  ajax.send();
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status === 200) {
      const mensaje = ajax.responseText;
      Listar(JSON.parse(mensaje));
      //console.log(mensaje);
    }
  };
}

const Listar = posts => {
  const tabla = document.querySelector(".tbody");

  for (i = 0; i < posts.length; i++) {
    tabla.insertRow(i);
    for (j = 0; j < 3; j++) {
      tabla.rows[i].insertCell(j);
    }
    const button = `<div class="d-flex justify-content-evenly"><button id=${posts[i].id} class="btn btn-dark" onclick="verPost(this)">Ver</button><button id=${posts[i].id} class="btn btn-outline-dark pl-3" onclick="deletePost(this)">Eliminar</button></div>`;
    tabla.rows[i].cells[0].innerHTML = posts[i].id;
    tabla.rows[i].cells[1].innerHTML = posts[i].nombre;
    tabla.rows[i].cells[2].innerHTML = posts[i].precio;
    //tabla.rows[i].cells[3].innerHTML = button;
  }
}

Obtener();

//Obtiene los datos de los inputs

const obtenerDatos = () => {
  const nombre = document.querySelector("#nombre").value;
  const precio = document.querySelector("#precio").value;
  return `nombre=${nombre}&precio=${precio}`;
};

const agregarProducto = () => {
  var url = "http://localhost:8888/cotizaciones/backend/agregarProducto.php";
  ajax.open("POST", url, true);
  ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  ajax.send(obtenerDatos());
  ajax.onreadysatechange = function () {};
  location.reload();
};
