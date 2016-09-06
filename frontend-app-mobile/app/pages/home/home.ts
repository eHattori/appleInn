import {Component, OnInit} from '@angular/core';
import {Modal, NavController, ViewController} from 'ionic-angular';
import {Details} from '../details/details';
import { Motel } from '../../motel';
import { ReservePage } from '../reserve/reserve';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage implements OnInit {

  rooms: Motel[];

  constructor(private navContoller: NavController) {
    this.rooms = this.mock;
  }

  ngOnInit() {

  }

  goToOtherPage(idRoom: number) {
    this.navContoller.push(ReservePage, {
      room: this.rooms.find(room => room.idRoom === idRoom)
    });
  }

  // reserveRoom(idRoom: number) {
  //   let modal = Modal.create(Details);
  //   this.navContoller.present(modal);
  // }

  mock: any = [

    {
      idRoom: "1",
      roomName: "Desejos",
      idMotel: 10,
      nameMotel: "Astúrias",
      price: 99.90,
      imagesUrlCdn: "url1",
      likes: 13,
      distance: 11.3
    },
    {
      idRoom: "2",
      roomName: "Marrocos",
      idMotel: 20,
      nameMotel: "Astúrias",
      price: 80.90,
      imagesUrlCdn: "url2",
      likes: 33,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    },
    {
      idRoom: "3",
      roomName: "Bahamas",
      idMotel: 30,
      nameMotel: "Astúrias",
      price: 110.90,
      imagesUrlCdn: "url3",
      likes: 99,
      distance: 10.3
    }

  ]


}
