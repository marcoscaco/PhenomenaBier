import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent {
  vendasOPs = [ 'Blonde', 'RED', 'Golden', 'Stoult', 'IPA', 'Lemon', 'Lager', 'Weiss', 'Wit', 'Tripel'
  ];

  vendasOn: true;
  totalMinhas = 5;
  vendasMes = 'Outubro';
  totalVendas = 100;
  vendas = [
    {
      Number: '1',
      Quantidade: '50',
      Tipo: 'IPA',
      Vendedor: 'Sam'
    },
    {
      Number: '2',
      Quantidade: '2',
      Tipo: 'Golden',
      Vendedor: 'Baranga'
    },
    {
      Number: '2',
      Quantidade: '2',
      Tipo: 'Golden',
      Vendedor: 'Baranga'
    },
    {
      Number: '2',
      Quantidade: '2',
      Tipo: 'Golden',
      Vendedor: 'Baranga'
    },
    {
      Number: '2',
      Quantidade: '2',
      Tipo: 'Golden',
      Vendedor: 'Baranga'
    },
    {
      Number: '2',
      Quantidade: '2',
      Tipo: 'Golden',
      Vendedor: 'Baranga'
    },
    {
      Number: '2',
      Quantidade: '2',
      Tipo: 'Golden',
      Vendedor: 'Baranga'
    },
    {
      Number: '2',
      Quantidade: '2',
      Tipo: 'Golden',
      Vendedor: 'Baranga'
    },
    {
      Number: '2',
      Quantidade: '2',
      Tipo: 'Golden',
      Vendedor: 'Baranga'
    }
  ];
  constructor() {
    console.log(this.vendasOn);
    this.totalMinhas = 50;
    this.totalVendas = 100;
  }

}
