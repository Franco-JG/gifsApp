import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private gifService:GifsService){}
  
  get historial():string[]{
    return this.gifService.historial;
  }

  buscar(elemento: string){
    this.gifService.buscarGif(elemento);
  }

}
