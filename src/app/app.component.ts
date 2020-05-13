import { Component } from '@angular/core';
import { ColoresService } from './services/colores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zahlen';
  
  constructor( private colorService: ColoresService ){
    this.colors();
  }

  colors(){
    this.colorService.getColors().subscribe( 
      colors =>{
        console.log(colors)
      }
    )
  }

}
