import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Provas } from '../../model/provas';
import { P } from '../../config/api.config';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  provas: Provas[] = P;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  simulado(){
    this.navCtrl.push('SimuladoPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

}
