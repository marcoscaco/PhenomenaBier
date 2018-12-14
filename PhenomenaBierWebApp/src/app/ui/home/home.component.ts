import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homePins = [
    {text: 'Não há quem goste de dor, que a procure e a queira ter, simplesmente porque é dor...'},
    {text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
