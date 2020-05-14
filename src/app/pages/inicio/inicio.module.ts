import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { ComponetsModule } from '../../components/componets.module';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    ComponetsModule,
    MatRippleModule
  ]
})
export class InicioModule { }
