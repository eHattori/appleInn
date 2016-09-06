import {Component} from '@angular/core';
import {Modal, NavController, ViewController} from 'ionic-angular';

@Component({
    templateUrl: "build/pages/details/details.html"
})

export class Details {

    constructor(private viewCtrl: ViewController) { }

    close() {
        this.viewCtrl.dismiss();
    }
}