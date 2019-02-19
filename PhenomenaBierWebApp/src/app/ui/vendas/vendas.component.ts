import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../db/firebase.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent {
  items: Observable<any[]>;
  vendas: Observable<any[]>;
  select: Observable<any[]>;
  seller: string;
  sliderValue = 1;
  op: string;
  constructor(private _FBS: FirebaseService) {
  this.items = _FBS.getPath('estoque');
  this.seller = 'Santiago';
  this.vendas = _FBS.getPath('vendas');
  this.op = '';
  }
  selectBreja(e) {
    this.sliderValue = 1;
    this.op = e;
  }
  selectValue(e) {
    this.sliderValue = e;
  }
}

