import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {
  listaEstudiantes: Estudiante[] = [
    { nombre: "Fernando", apellido: "Girón", edad: 32, curso: "Angular", activo: true, deporte: "futbol" },
    { nombre: "Gloria", apellido: "Estrada", edad: 21, curso: "React", activo: false, deporte: "baseball" },
    { nombre: "Arturo", apellido: "Flores", edad: 40, curso: "CSS", activo: true, deporte: "volleyball" },
    { nombre: "Ricardo", apellido: "Alvarez", edad: 36, curso: "HTML", activo: false, deporte: "" },
    { nombre: "Oscar", apellido: "Carreño", edad: 19, curso: "C#", activo: true, deporte: "" },
    { nombre: "Julio", apellido: "Amador", edad: 22, curso: "Cocina", activo: true, deporte: "karate" },
    { nombre: "Cesar", apellido: "Olvera", edad: 29, curso: "Carpintería", activo: false, deporte: "" },
    { nombre: "Alfredo", apellido: "Gimenez", edad: 43, curso: "Español", activo: false, deporte: "futbol" },
    { nombre: "Lizbeth", apellido: "Rodriguez", edad: 27, curso: "Repostería", activo: true, deporte: "karate" },
    { nombre: "Dulce", apellido: "Rendon", edad: 26, curso: "Metalistería", activo: false, deporte: "futbol" },
  ]
}
