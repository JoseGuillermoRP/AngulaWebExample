import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RncabezadoComponent } from './rncabezado.component';

describe('RncabezadoComponent', () => {
  let component: RncabezadoComponent;
  let fixture: ComponentFixture<RncabezadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RncabezadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
