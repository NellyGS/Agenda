import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPage } from '../new/new';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  new= NewPage
  info= InfoPage
  contactos=[
    { 
      nombre: "Slimer", 
      imagen: "../assets/imgs/img 2.png",
      numero: "33 3157 8948",
      face: "Slimer LH",
      correo: "Slim7642@outlook.com",
      twitter: "@Slimer.LH",
      insta: "Slimer LH"
    }
    
  ];

  constructor(public navCtrl: NavController) {

  }

  clicknew (){
    this.navCtrl.push (this.new, {contactos: this.contactos});
  }

  clickinfo (c) {
    this.navCtrl.push (this.info, c);
  }
}
