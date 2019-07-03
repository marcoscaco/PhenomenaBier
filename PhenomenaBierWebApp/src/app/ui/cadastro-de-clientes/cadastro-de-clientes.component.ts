import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro-de-clientes',
  templateUrl: './cadastro-de-clientes.component.html',
  styleUrls: ['./cadastro-de-clientes.component.css']
})
export class CadastroDeClientesComponent implements OnInit {

  nome = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
