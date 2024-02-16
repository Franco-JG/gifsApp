import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'eAAp2JRjGeNTjG7QnDaNEig0dPH9qv58';
  private urlServicio: string = 'https://api.giphy.com/v1/gifs';    // No lleva / al final
  private _historial: string[] = [];  //Guarda las busquedas

  public resultados: Gif[] = [];


  get historial() {
    return [...this._historial];  //Rompe la referencia de _historial y lo retorna
  }

  constructor(private httpServ: HttpClient){

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  //FIXME Forma de hacer una petición con async & await
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

  buscarGif(query:string){

    query = query.toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query); 
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial',JSON.stringify(this._historial));
      
    }
    const parametros = new HttpParams()
            .set('api_key','eAAp2JRjGeNTjG7QnDaNEig0dPH9qv58')
            .set('q',query)
            .set('limit',10)
    // this.httpServ.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=12`)
    this.httpServ.get<SearchGifsResponse>(`${this.urlServicio}/search`,{params:parametros}) //Con el uso de parámetros
    .subscribe((respuesta) =>{
      this.resultados = respuesta.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultados));
      })

  }
}
