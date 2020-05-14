import { Component, OnInit } from '@angular/core';
import { ColoresService } from 'src/app/services/colores.service';
import { Color } from '../../interface/color';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent  implements OnInit {

  public colores: Color[] = [];
  public selectedPage: number = 1;
  constructor(public colorService: ColoresService) { 
  }

  ngOnInit(): void {
    this.colors();
  }
  colors( page: number = 1 ){
    this.colorService.getColors(page).subscribe( 
      (colors: any) =>{
        this.colores = colors;
      }
    )
  }
  pageEvent(value){

    if( this.selectedPage === 1 && value === -1){
      return;
    }
    if( this.selectedPage === this.colorService.total_pages && value === 1){
      return;
    }
    this.selectedPage += value;
    this.colors( this.selectedPage );
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }

}
