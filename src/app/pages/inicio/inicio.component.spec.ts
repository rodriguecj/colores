import { async } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';
import { ColoresService } from '../../services/colores.service';
import { from } from 'rxjs';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let servicio = new ColoresService(null);

  beforeEach(async(() => {
    component = new InicioComponent( servicio );
  }));

  it('Componente inicio creado', () => {
    expect(component).toBeTruthy();
  });

  it('Se debe cargar los colores', () => {
    
    const colores = [ {
      color: "#98B2D1",
      id: 1,
      name: "cerulean",
      pantone_value: "15-4020",
      year: 2000
      },
      {
      color: "#C74375",
      id: 2,
      name: "fuchsia rose",
      pantone_value: "17-2031",
      year: 2001
      } 
    ]

    spyOn( servicio, 'getColors' ).and.callFake( ()=>{

      return from( [ colores ] )

    })


    component.ngOnInit();

    expect( component.colores.length ).toBeGreaterThan(0);
  });

  it('Solo existen paginas mayores a 0', ()=>{

    let clickAnterior = -1;
  
    component.selectedPage = 1;
    component.pageEvent(clickAnterior)
    
    expect( component.selectedPage ).toEqual( 1 );

  })

});
