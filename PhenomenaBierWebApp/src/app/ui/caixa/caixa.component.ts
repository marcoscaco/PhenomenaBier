import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {
caixa = [
  {tipo: 'debito', detalhe:  'Cartão 2x187 ', valor: 100, data: '13/12/2017'},
  {tipo: 'debito', detalhe:'Botijão Gás', valor: 50, data: '13/12/2017'},
  { tipo: 'debito', detalhe: 'Gás', valor: 50, data: '13/12/2017'},
  {tipo: 'debito', detalhe: 'Insumos', valor: 50, data: '13/12/2017'},
  {tipo: 'debito', detalhe:'1 Galão H2O', valor: 50, data: '13/12/2017'},
  {tipo: 'debito', detalhe: 'Cartão Renan', valor: 50, data: '13/12/2017'},
  {tipo: 'debito', detalhe: 'Viagem Pira', valor: 50, data: '13/12/2017'},
  {tipo: 'debito', detalhe: 'Lemon', valor: 50, data: '13/12/2017'},
  {tipo: 'debito', detalhe: 'Lager', valor: 50, data: '13/12/2017'},
  {tipo: 'debito', detalhe: 'Tripel', valor: 40, data: '13/12/2017'},
  {tipo: 'debito', detalhe: 't-58', valor: 6, data: '13/12/2017'},
    { tipo: 'debito', detalhe: 's-23', valor: 6, data: '13/12/2017'},
    {tipo: 'debito', detalhe: 'us-05', valor: 0, data: '13/12/2017'},
    {tipo: 'debito', detalhe: 'wb-06', valor: 1, data: '13/12/2017'},
    {tipo: 'debito', detalhe: 's-04', valor: 2, data: '13/12/2017'},
    { tipo: 'debito', detalhe: 'Citra', valor: 138, data: '13/12/2017'},
    { tipo: 'debito', detalhe: 'Saaz', valor: 48, data: '13/12/2017'},
    {tipo: 'credito', detalhe: 'Cascade', valor: 48, data: '13/12/2017'},
    {tipo: 'credito', detalhe: 'Hallertau Mittelfruh', valor: 48, data: '13/12/2017'},
    {tipo: 'credito', detalhe: 'Centennial', valor: 48, data: '13/12/2017'},
    {itipo: 'credito', detalhe: 'Simcoe', valor: 48, data: '13/12/2017'},
    {tipo: 'credito', detalhe: 'U.S. Golding', valor: 48, data: '13/12/2017'},
    {tipo: 'credito', detalhe: 'Amarillo', valor: 48, data: '13/12/2017'},
    { tipo: 'credito', detalhe: 'Nugget', valor: 48, data: '13/12/2017'},
    {tipo: 'credito', detalhe: 'Sorachi Ace', valor: 48, data: '13/12/2017'},
    {tipo: 'credito', detalhe: 'Pilsen', valor: 48, data: '13/12/2017'},
    {tipo: 'credito', detalhe: 'Pale Ale', valor: 48, data: '13/12/2017'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
