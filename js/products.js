let producto = []

function productoAHtml(producto) {
    return `
    <div class="Lista-productos">
      <div class="row shadow overflow-hidden mb-3">
        <div class="col-sm-5 col-md-3 col-lg-2 p-0 overflow-hidden">
          <img src="${producto.image}" alt="" class="img-fluid">
        </div>
        <div class="col">
          <h3>${producto.name}</h3>
          <p>${producto.description}</p>
          <div class="row">
            <div class="col">
              <span class="moneda">${producto.currency}</span>
              <span class="precio">${producto.cost}</span>
            </div>
            <div class="col">
              <p>Unidades vendidas: <span class="canidad">${producto.soldCount}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

}
var productos = null;

document.addEventListener("DOMContentLoaded", async function () {
    const listaProductos = document.querySelector(".lista-productos")

    let respuesta = await getJSONData(PRODUCTOS_URL);
    if (respuesta.status === "ok") {
        productos = respuesta.data;

        producto.forEach(producto => {
            listaProductos.innerHTML += productoAHtml(producto);
        });
    }
})