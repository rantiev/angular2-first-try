import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  listItems = [
    {
      name: 'Baba Jaba',
      quantity: 10,
    },
    {
      name: 'Haba Haba',
      quantity: 20,
    },
    {
      name: 'Paca Vaca',
      quantity: 30,
    },
  ]

  btnActive = true

  resort() {
    this.listItems = this.listItems
    .sort((a, b) => b.quantity - a.quantity)

    this.btnActive = false
  }
}
