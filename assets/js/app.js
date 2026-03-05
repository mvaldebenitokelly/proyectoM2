console.log("JS conectado");

const selProducto = document.getElementById("selProducto");
const txtPrecio = document.getElementById("txtPrecio");
const txtCantidad = document.getElementById("txtCantidad");
const chkFrecuente = document.getElementById("chkFrecuente");
const selPago = document.getElementById("selPago");
const btnCalcular = document.getElementById("btnCalcular");

const msg = document.getElementById("msg");

const spSubtotal = document.getElementById("spSubtotal");
const spDescuento = document.getElementById("spDescuento");
const spRecargo = document.getElementById("spRecargo");
const spIva = document.getElementById("spIva");
const spResumen = document.getElementById("spResumen");

console.log(selProducto, txtPrecio, txtCantidad, btnCalcular);

// asociación de producto = precio automatizado

const PRECIOS = {
  cafe: 1500,
  sandwich: 3500,
  jugo: 1200,
};

function autocompletarPrecio() {
  const producto = selProducto.value;
  txtPrecio.value = PRECIOS[producto];
}

selProducto.addEventListener("change", autocompletarPrecio);
autocompletarPrecio();

// validaciones

function mostrarError(texto) {
  msg.textContent = texto;
}

function limpiarError() {
  msg.textContent = "";
}

function leerNumero(input) {
  return Number(input.value);
}

function validarEntradas(precio, cantidad) {
  if (!Number.isFinite(precio) || precio <= 0) {
    mostrarError("Precio inválido. Debe ser mayor que 0.");
    return false;
  }

  if (!Number.isFinite(cantidad) || cantidad < 1) {
    mostrarError("Cantidad inválida. Debe ser 1 o más.");
    return false;
  }
  limpiarError();
  return true;
}

btnCalcular.addEventListener("click", () => {
  const precio = leerNumero(txtPrecio);
  const cantidad = leerNumero(txtCantidad);

  if (!validarEntradas(precio, cantidad)) return;

  const productoNombre = selProducto.options[selProducto.selectedIndex].text;
  const esFrecuente = chkFrecuente.checked;
  const metodoPago = selPago.value;

  const r = calcularTotales(precio, cantidad, esFrecuente, metodoPago);

  spSubtotal.textContent = formatearCLP(r.subtotal);
  spDescuento.textContent = formatearCLP(r.descuento);
  spRecargo.textContent = formatearCLP(r.recargo);
  spIva.textContent = formatearCLP(r.iva);
  spTotal.textContent = formatearCLP(r.total);

  spResumen.textContent =
    `${productoNombre} x ${cantidad} | Pago: ${metodoPago} | ` +
    `Desc: ${(r.descPctTotal * 100).toFixed(0)}% | Rec: ${(r.recPct * 100).toFixed(0)}%`;
});

// descuentos
function descuentoPorCantidad(cantidad) {
  // 1–2: 0% | 3–5: 5% | 6+: 10%
  if (cantidad >= 6) return 0.1;
  if (cantidad >= 3) return 0.05;
  return 0.0;
}

function recargoPorPago(metodo) {
  // tarjeta: 2% | efectivo: 0%
  if (metodo === "tarjeta") return 0.02;
  return 0.0;
}

function formatearCLP(valor) {
  // Formato simple. Si quieren, luego lo mejoran.
  return "$" + Math.round(valor).toLocaleString("es-CL");
}

function calcularTotales(precio, cantidad, esFrecuente, metodoPago) {
  const subtotal = precio * cantidad;

  const descCantidad = descuentoPorCantidad(cantidad);
  const descFrecuente = esFrecuente ? 0.03 : 0.0;
  const descPctTotal = descCantidad + descFrecuente;

  const descuento = subtotal * descPctTotal;

  const recPct = recargoPorPago(metodoPago);
  const recargo = subtotal * recPct;

  // Neto base recomendado: subtotal - descuento + recargo
  const neto = subtotal - descuento + recargo;

  const iva = neto * 0.19;
  const total = neto + iva;

  return { subtotal, descuento, recargo, iva, total, descPctTotal, recPct };
}

function intentarRecalcular() {
  const precio = leerNumero(txtPrecio);
  const cantidad = leerNumero(txtCantidad);

  if (
    Number.isFinite(precio) &&
    precio > 0 &&
    Number.isFinite(cantidad) &&
    cantidad >= 1
  ) {
    btnCalcular.click();
  }
}

txtCantidad.addEventListener("input", intentarRecalcular);
selPago.addEventListener("change", intentarRecalcular);
chkFrecuente.addEventListener("change", intentarRecalcular);
