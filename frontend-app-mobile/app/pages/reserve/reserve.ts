import { Component, OnInit, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Geolocation, GoogleMap, GoogleMapsEvent} from 'ionic-native';


@Component({
  templateUrl: 'build/pages/reserve/reserve.html',
})
export class ReservePage implements OnInit {

  roomSelected: number;
  elementId: ElementRef;

  constructor(private navController: NavController, private navParams: NavParams, elementRef: ElementRef) {
    this.roomSelected = navParams.get('room');

    this.elementId = elementRef;
    
  }

  ngOnInit() {
    Geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude + '/' + resp.coords.longitude);
    });

    let map = new GoogleMap('elementId');
    map.on(GoogleMapsEvent.MAP_READY).subscribe(() => console.log('Map is ready!'));
    
  
  }

  goBack() {
    this.navController.pop();
  }

  slides = [
    { image: "img/ica-slidebox-img-1.png", },
    { image: "img/ica-slidebox-img-2.png", },
    { image: "img/ica-slidebox-img-3.png", }
  ];

  roomSlideOptions = {
    loop: true,
    pager: false,
    autoplay: 300
  };

}
