export function dateATexto(fecha) {
  const dia = fecha.getDate().toString().padStart(2, "0");
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
  const anio = fecha.getFullYear();
  const diaConvertido = `${anio}-${mes}-${dia}`;
  return diaConvertido;
}
export function grillaMes(anio, mes) {
  const fecha = new Date(anio, mes, 1);
  const diasVacios = (fecha.getDay() + 6) % 7;
  const cantDiasMes = new Date(anio, mes + 1, 0).getDate();
  const grilla = [];
  for (let i = 0; i < diasVacios; i++) {
    grilla.push(".");
  }
  for (let i = 1; i <= cantDiasMes; i++) {
    const fechaAgregar = new Date(anio, mes, i);
    grilla.push(dateATexto(fechaAgregar));
  }

  return grilla;
}
export function nombreMes(anio, mes) {
  const fecha = new Date(anio, mes).toLocaleDateString("es-AR", {
    month: "long",
    year: "numeric",
  });

  return fecha[0].toUpperCase() + fecha.slice(1);
}
