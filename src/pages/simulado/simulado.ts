import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Questoes } from '../../model/questoes';
import { Q } from '../../config/api.config';

/**
 * Generated class for the SimuladoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-simulado',
  templateUrl: 'simulado.html',
})
export class SimuladoPage {

  questoes: Questoes [] = Q;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  resultado(){
    this.navCtrl.push('ResultadoPage');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SimuladoPage');
  }

}
