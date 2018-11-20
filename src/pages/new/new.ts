import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  contactos = [];
  nombre = '';
  numero= '';
  correo = '';
  face = '';
  twitter = '';
  insta = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.contactos = this.navParams.get ('contactos');
  }
  clickAgregar () {
    if ((this.nombre.length > 0) && (this.numero.length > 0)){
       this.contactos.push ({imagen: "../assets/imgs/img1.png",  nombre: this.nombre, numero: this.numero, correo: this.correo, face: this.face, twitter: this.twitter, insta: this.insta});
    }
    else{
      const alert = this.alertCtrl.create ({ title: 'Oye', subTitle: 'Te falto un parametro', buttons: ['ok']});
      alert.present();
    }

    


  }










  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

}
