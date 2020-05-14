import { Component, OnInit, Input } from '@angular/core';
import { Color } from '../../interface/color';
import { ColoresService } from '../../services/colores.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  @Input() color: Color;
  constructor(public coloresService: ColoresService) { }

  ngOnInit(): void {
  }
  clickColor( color: string ){
    /* console.log(color); */
    navigator.clipboard.writeText(color).then( ()=> {
      /* console.log(color, ' Copiado'); */
      this.coloresService.selectedColor = color;
    })
  }
}
