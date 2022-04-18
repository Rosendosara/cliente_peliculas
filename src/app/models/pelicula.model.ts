import { NumberFormatStyle } from "@angular/common";

export class pelicula{
        id:Number;
        titulo:string;
        fecha_estreno:number;
        sinopsis:string;
        imagen:string;
        video:string

        constructor(id:number,titulo:string,fecha_estreno:number,sinopsis:string,imagen:string,video:string){
            this.id=id;
            this.titulo=titulo;
            this.fecha_estreno=fecha_estreno;
            this.sinopsis=sinopsis;
            this.imagen=imagen;
            this.video=video

        }

}