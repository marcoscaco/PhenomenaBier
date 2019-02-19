import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../db/firebase.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {
  itemsCervejas: Observable<any[]>;
  itemsConsumiveis: Observable<any[]>;
  constructor(private _FBS: FirebaseService) {
    this.itemsConsumiveis = _FBS.getPath('consumiveis');
    this.itemsCervejas = _FBS.getPath('estoque')
  }
}
