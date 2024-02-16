import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'eAAp2JRjGeNTjG7QnDaNEig0dPH9qv58';
  private _historial: string[] = [];  //Guarda las busquedas

  get historial() {
    return [...this._historial];  //Rompe la referencia de _historial y lo retorna
  }
  //NOTA Forma de hacer una petición con async & await
  //Una manera de hacer la peticion
  // async buscarGif(query:string){
  //   query = query.toLowerCase();
  //   if(!this._historial.includes(query)){
  //     this._historial.unshift(query); 
  //     this._historial = this._historial.splice(0,10);
  //   }
  //   const respuesta = await fetch('https://api.giphy.com/v1/gifs/search?api_key=eAAp2JRjGeNTjG7QnDaNEig0dPH9qv58&q=honda&limit=5');
  //   const data = await respuesta.json();
  //   console.log(data);
  // }

  //TODO Video 12 - Realizar peticion HTTP
  buscarGif(query:string){

    query = query.toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query); 
      this._historial = this._historial.splice(0,10);
    }
    console.log(this._historial);
    
  }
}
