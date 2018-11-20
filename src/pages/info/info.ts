import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  nombre = '';
  imagen = '';
  numero = '';
  correo = '';
  face = '';
  twitter = '';
  insta= '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.nombre = this.navParams.get ('nombre');
    this.imagen = this.navParams.get ('imagen');
    this.correo = this.navParams.get ('correo');
    this.numero = this.navParams.get ('numero');
    this.face = this.navParams.get ('face');
    this.twitter = this.navParams.get ('twitter');
    this.insta = this.navParams.get ('insta');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
