enum TipoDeEvento {
    Asteroide,
    Aliens,
    AgujeroNegro,
    Otro,
  }
  
  class Evento {
    constructor(public tipo: TipoDeEvento, public peligroso: number) {}
  
    trigger(): void {
      console.log(`Evento: ${TipoDeEvento[this.tipo]}, Nivel de peligro: ${this.peligroso}`);
      // Simulate event effects here
    }
  }
  
  export { Evento, TipoDeEvento };
  