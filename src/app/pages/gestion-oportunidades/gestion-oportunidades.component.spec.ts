import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionOportunidadesComponent } from './gestion-oportunidades.component';

describe('GestionOportunidadesComponent', () => {
  let component: GestionOportunidadesComponent;
  let fixture: ComponentFixture<GestionOportunidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionOportunidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionOportunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
