import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { C } from '../../config/api.config';
import { Categorias } from '../../model/categorias';

/**
 * Generated class for the MenuLateralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-lateral',
  templateUrl: 'menu-lateral.html',
})
export class MenuLateralPage {

  categorias: Categorias[] = C;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuLateralPage');
  }

}
