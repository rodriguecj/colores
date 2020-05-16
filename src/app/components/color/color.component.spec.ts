import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorComponent } from './color.component';
import { ColoresService } from '../../services/colores.service';

describe('ColorComponent', () => {
  let component: ColorComponent;
  let service = new ColoresService(null);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = new ColorComponent(service)

  });

  it('Se debe crear el componente ColorComponent', () => {
    expect(component).toBeTruthy();
  });
});
