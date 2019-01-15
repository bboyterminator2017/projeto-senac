import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

 
  formGroup : FormGroup;
  loginForm: FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public http: Http,
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController

  ){

 
    this.formGroup = this.formBuilder.group({
      nome : ['', [Validators.required, Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(120)]],
      cep : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      rua : ['', [Validators.required]],
      bairro : ['', [Validators.required]],
      cidade : ['', [Validators.required]],
      estado : ['', [Validators.required]],
      login : ['', [Validators.required]],
      senha : ['', [Validators.required]],
      /*confirmarSenha: ['', [Validators.required, ValidateConfirmarSenha]],*/
      foto : [null],  
    }); 
  }

  enderecoAutomatico() {
    const cepValue = this.formGroup.controls['cep'].value;
    const isValid = this.formGroup.controls['cep'].valid;
    if(isValid){
      this.http.get(`https://viacep.com.br/ws/${cepValue}/json/`)
      .map(res => res.json())
      .subscribe(data => {
          this.insereValoresEndereco(data);
      })
    }
  }

  insereValoresEndereco(dados) {
    this.formGroup.controls['rua'].setValue(dados.logradouro);
    this.formGroup.controls['bairro'].setValue(dados.bairro);
    this.formGroup.controls['cidade'].setValue(dados.localidade);
    this.formGroup.controls['estado'].setValue(dados.uf);
  }

  cadastraContato() {
  this.db.database.ref('/contatos').push(this.formGroup.value)
  this.afAuth.auth.createUserWithEmailAndPassword(
    this.formGroup.value.email, this.formGroup.value.senha)
    .then((response) => {
      this.presentAlert('Usuário cadastrado!', 'Usuário cadastrado com sucesso.'),
      this.navCtrl.setRoot('HomePage');
    })
    .catch((error) => {
      if(error.code == 'auth/email-already-in-use')
      this.presentAlert('Erro', 'E-mail já cadastrado!');
        else if(error.code == 'auth/invalid-email')
        this.presentAlert('Erro', 'Esse e-mail é inválido!');
          else if(error.code == 'auth/invalid-email')
          this.presentAlert('Erro', 'E-mail ou senha não permitido! Tente outro.');
            else
              this.presentAlert('Erro', 'A senha escolhida é fraca!\
               Tente combinar números e letras.');
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

}
