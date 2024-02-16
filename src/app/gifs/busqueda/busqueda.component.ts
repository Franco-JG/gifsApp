import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  constructor (private gifService:GifsService) {} //Inyeccion del servicio

  @ViewChild('txtBuscar') txt!: ElementRef<HTMLInputElement>;

  buscar(){
    const valor = this.txt.nativeElement.value.trim();
    if(valor.length > 0){
      this.gifService.buscarGif(valor);
      // console.log(this.gifService.historial);
    }
    this.txt.nativeElement.value = '';
  }

}
