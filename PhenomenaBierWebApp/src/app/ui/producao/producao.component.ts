import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../db/firebase.service';


@Component({
  selector: 'app-producao',
  templateUrl: './producao.component.html',
  styleUrls: ['./producao.component.css']
})

export class ProducaoComponent implements OnInit {
  items: Observable<any[]>;
  constructor(private _FBS: FirebaseService) {
    this.items = _FBS.getPath("estoque");
  }

  ngOnInit() {
  }

}
