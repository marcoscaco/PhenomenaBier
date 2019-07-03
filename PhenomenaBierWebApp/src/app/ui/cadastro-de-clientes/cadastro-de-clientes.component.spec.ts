import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeClientesComponent } from './cadastro-de-clientes.component';

describe('CadastroDeClientesComponent', () => {
  let component: CadastroDeClientesComponent;
  let fixture: ComponentFixture<CadastroDeClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDeClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDeClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
