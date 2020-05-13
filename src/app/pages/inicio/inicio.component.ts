import { Component, OnInit } from '@angular/core';
import { ColoresService } from 'src/app/services/colores.service';
import { Color } from '../../interface/color';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public colores: Color[] = [];

  constructor(private colorService: ColoresService) { }

  ngOnInit(): void {
    this.colors();
  }
  colors(){
    this.colorService.getColors().subscribe( 
      (colors: any) =>{
        this.colores = colors;
        console.log(this.colores)
      }
    )
  }
  /* clickColor( color: string ){
    console.log(color);
  } */

}
