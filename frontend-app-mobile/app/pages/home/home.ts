import {Component} from '@angular/core';
import {Modal, NavController, ViewController} from 'ionic-angular';
import {Details} from '../details/details';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {

  constructor(private navContoller: NavController) {
  }

  showModal(){
    console.log("test");
    let modal = Modal.create(Details);
    this.navContoller.present(modal);
  }

}
