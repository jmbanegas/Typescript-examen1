import { Evento, TipoDeEvento } from "../modelo/evento";

// Función para manejar eventos
function manejoEvento(evento: Evento): void {
  switch (evento.tipo) {
    case TipoDeEvento.Asteroide:
      console.log(`Impacto de asteroide detectado! Daño`);
      break;
    case TipoDeEvento.Aliens:
      console.log(`¡Encuentro de alien!`);
      break;
    case TipoDeEvento.AgujeroNegro:
      console.log(`¡Agujero negro cerca!.`);
      break;
    default:
      console.log(`Tipo de evento desconocido`);
  }
}

export { manejoEvento };
