import { Component, OnInit } from '@angular/core';
import { pelicula } from 'src/app/models/pelicula.model';
import { SPeliculasService } from 'src/app/services/s-peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  peliculas:pelicula[]=new Array<pelicula>();

  constructor(private servicioPeliculas:SPeliculasService) { 
   
  }
  ngOnInit(): void {
    this.servicioPeliculas.getPeliculas().subscribe(
      peliculas=> {
        this.peliculas = peliculas;
      })
  }

}
