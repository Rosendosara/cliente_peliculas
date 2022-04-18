import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pelicula } from '../models/pelicula.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SPeliculasService {
  peliculas:Observable<pelicula[]>=new Observable();
  constructor(private clienteHttp:HttpClient) {

   }
   getPeliculas(): Observable<pelicula[]> {
   console.log ("Obteniendo productos del WS");
   this.peliculas=this.clienteHttp.get<pelicula[]>("http://localhost:8082/peliculas")
   return this.peliculas;
}
}