// src/main.ts

import  Nave_Espacial  from "./vista/nave.espacial";
import { Planeta, TipoDeRecurso } from "./modelo/planeta";
import { Evento, TipoDeEvento } from "./modelo/evento";
import { navegar } from "./controlador/exploracion.funcion";
import { ColeccionRecursos } from "./controlador/coleccion.recursos.funcion";
import { manejoEvento } from "./controlador/manejo.eventos";
import { entradaUsuario } from "./controlador/entrada.usuario";
import { simulacionTiempo } from "./controlador/simulacion";

// Crear una instancia de la nave espacial
const mySpaceship: Nave_Espacial = {
  salud: 100,
  capacidadDeCarga: 200,
  velocidad: 10,
};

// Creacion de planetas
const tierra = new Planeta("Tierra", TipoDeRecurso.Agua, 2);
const marte = new Planeta("Marte", TipoDeRecurso.Oxigeno, 5);
const luna = new Planeta("Luna", TipoDeRecurso.Minerales, 1);

// Explorar algunos planetas
tierra.explore();
marte.explore();
luna.explore();

// Crear algunos eventos
const asteroide = new Evento(TipoDeEvento.Asteroide, 8);
const aliens = new Evento(TipoDeEvento.Aliens, 6);
const agujeroNegro = new Evento(TipoDeEvento.AgujeroNegro, 3);

// Manejar eventos
manejoEvento(asteroide);
manejoEvento(aliens);
manejoEvento(agujeroNegro);

// Navegar en diferentes direcciones
navegar('Norte');
navegar('Este');
navegar('Sur');
navegar('Oeste');

simulacionTiempo(5);

const planetaSeleccionado = entradaUsuario([tierra, marte, luna]);
console.log(`Ha seleccionado viajar a ${planetaSeleccionado.nombre}`);

const recursoColeccionado = new ColeccionRecursos<string>();

const recursosDisponibles = [
  { recurso: 'Agua', maxVeces: 3 },
  { recurso: 'Oxigeno', maxVeces: 4 },
  { recurso: 'Minerales', maxVeces: 2 }
];

for (const recursoInfo of recursosDisponibles) {
  const cantidadRecoleccion = Math.floor(Math.random() * (recursoInfo.maxVeces + 4)); 
  for (let i = 0; i < cantidadRecoleccion; i++) {
    recursoColeccionado.add(recursoInfo.recurso);
  }
}
console.log("Recursos coleccionados:", recursoColeccionado.getAll());


