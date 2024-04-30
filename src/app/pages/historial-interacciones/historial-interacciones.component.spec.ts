import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialInteraccionesComponent } from './historial-interacciones.component';

describe('HistorialInteraccionesComponent', () => {
  let component: HistorialInteraccionesComponent;
  let fixture: ComponentFixture<HistorialInteraccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialInteraccionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialInteraccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
