import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Respostas } from '../../model/respostas';
import { R } from '../../config/api.config';

/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  respostas: Respostas[] = R;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage');
  }

}
