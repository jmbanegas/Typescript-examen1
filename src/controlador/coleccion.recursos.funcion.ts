// src/utils/resource.collection.ts

class ColeccionRecursos<T> {
    private recursos: T[] = [];
  
    add(recursos: T): void {
      this.recursos.push(recursos);
      console.log(`Recurso conseguido: ${recursos}`);
    }
  
    getAll(): T[] {
      return this.recursos;
    }
  }
  
  export { ColeccionRecursos };
  