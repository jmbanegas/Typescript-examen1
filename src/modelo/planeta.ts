enum TipoDeRecurso {
    Agua,
    Oxigeno,
    Minerales,
    Otro,
  }
  
  class Planeta {
    constructor(public nombre: string, public tipoRecurso: TipoDeRecurso, public nivelPeligro: number) {}
  
    explore(): void {
      console.log(`Explorando ${this.nombre}...`);
    }
  }
  
  export { Planeta, TipoDeRecurso };
  