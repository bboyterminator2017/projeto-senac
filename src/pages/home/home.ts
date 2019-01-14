import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { StorageService } from '../../service/storage.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toast: any;
  autentic: any;
  public user: any;
  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(public navCtrl: NavController) {
  }
  


  principal(){
    this.navCtrl.setRoot('PrincipalPage');
  }

  cadastro(){
    this.navCtrl.push('CadastroPage');
  }


}
