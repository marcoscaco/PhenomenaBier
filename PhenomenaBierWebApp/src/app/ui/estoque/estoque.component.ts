import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {
items = [
  {tipo: 'Cerveja', nome:  'IPA', quantidade: 100, grandeza: 'un'},
  {tipo: 'Cerveja', nome:'Black IPA', quantidade: 50, grandeza: 'un'},
  { tipo: 'Cerveja', nome: 'RED', quantidade: 50, grandeza: 'un'},
  {tipo: 'Cerveja', nome: 'APA', quantidade: 50, grandeza: 'un'},
  {tipo: 'Cerveja', nome:'Golden', quantidade: 50, grandeza: 'un'},
  {tipo: 'Cerveja', nome: 'Stoult', quantidade: 50, grandeza: 'un'},
  {tipo: 'Cerveja', nome: 'Stoult', quantidade: 50, grandeza: 'un'},
  {tipo: 'Cerveja', nome: 'Lemon', quantidade: 50, grandeza: 'un'},
  {tipo: 'Cerveja', nome: 'Lager', quantidade: 50, grandeza: 'un'},
  {tipo: 'Cerveja', nome: 'Tripel', quantidade: 40, grandeza: 'un'},
  {tipo: 'Fermentos', nome: 't-58', quantidade: 6, grandeza: 'un'},
    { tipo: 'Fermentos', nome: 's-23', quantidade: 6, grandeza: 'un'},
    {tipo: 'Fermentos', nome: 'us-05', quantidade: 0, grandeza: 'un'},
    {tipo: 'Fermentos', nome: 'wb-06', quantidade: 1, grandeza: 'un'},
    {tipo: 'Fermentos', nome: 's-04', quantidade: 2, grandeza: 'un'},
    { tipo: 'Lupulos', nome: 'Citra', quantidade: 138, grandeza: 'g'},
    { tipo: 'Lupulos', nome: 'Saaz', quantidade: 48, grandeza: 'g'},
    {tipo: 'Lupulos', nome: 'Cascade', quantidade: 48, grandeza: 'g'},
    {tipo: 'Lupulos', nome: 'Hallertau Mittelfruh', quantidade: 48, grandeza: 'g'},
    {tipo: 'Lupulos', nome: 'Centennial', quantidade: 48, grandeza: 'g'},
    {itipo: 'Lupulos', nome: 'Simcoe', quantidade: 48, grandeza: 'g'},
    {tipo: 'Lupulos', nome: 'U.S. Golding', quantidade: 48, grandeza: 'g'},
    {tipo: 'Lupulos', nome: 'Amarillo', quantidade: 48, grandeza: 'g'},
    { tipo: 'Lupulos', nome: 'Nugget', quantidade: 48, grandeza: 'g'},
    {tipo: 'Lupulos', nome: 'Sorachi Ace', quantidade: 48, grandeza: 'g'},
    {tipo: 'Maltes', nome: 'Pilsen', quantidade: 48, grandeza: 'Kg'},
    {tipo: 'Maltes', nome: 'Pale Ale', quantidade: 48, grandeza: 'Kg'}
  ];
  constructor() { }
}
