import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ToastController, NavParams, AlertController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { StorageService } from '../../service/storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth} from '@angular/fire/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginForm: FormGroup

  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController
  ) {
    this.loginForm = this.formbuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }
  
  submitLogin() {
    this.afAuth.auth.signInWithEmailAndPassword(
      this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
        this.presentAlert('Usuário autenticado', '');
        this.navCtrl.setRoot('PrincipalPage');
      })
      .catch((error) => {
          if(error.code == 'auth/invalid-email') {
            this.presentAlert('Erro', 'E-mail inválido.');
            this.loginForm.controls['password'].setValue(null);
      }
            else if(error.code == 'auth/wrong-password') {
            this.presentAlert('Erro', 'Senha incorreta, digite novamente.');
            this.loginForm.controls['password'].setValue(null);
      }
                else if(error.code == 'auth/user-disabled') {
                this.presentAlert('Erro', 'Esse usuário encontra-se desabilitado.');
                this.loginForm.controls['password'].setValue(null);
      }
      
                    else{
                    this.presentAlert('Erro', 'Este usuário não foi encontrado.');
                    this.loginForm.controls['password'].setValue(null);
        }
    })
  }

  presentAlert(title: string, subtitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }

  principal(){
    this.navCtrl.setRoot('PrincipalPage');
  }

  cadastro(){
    this.navCtrl.push('CadastroPage');
  }


}
