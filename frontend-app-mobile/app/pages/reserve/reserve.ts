import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/reserve/reserve.html',
})
export class ReservePage {

  roomSelected: number;

  constructor(private navController: NavController, private navParams: NavParams) {
    this.roomSelected = navParams.get('room');
    console.log(this.roomSelected);
  }

  goBack() {
    this.navController.pop();
  }

}
