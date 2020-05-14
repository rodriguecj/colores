import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorComponent } from './color/color.component';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [
    ColorComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule
  ],
  exports: [
    ColorComponent
  ]
})
export class ComponetsModule { }
