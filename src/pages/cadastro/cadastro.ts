import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/*import { CadastroService } from '../../service/cadastro.service';*/
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  formGroup : FormGroup;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    /*public cadastroService: CadastroService*/

  ){

 
    this.formGroup = this.formBuilder.group({
      nome : ['', [Validators.required, Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      login : ['', [Validators.required], Validators.maxLength(16)],
      senha : ['', [Validators.required]],
      foto : ['', [Validators.required]]
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

 /* cadastrar(){
    console.log(this.formGroup.value);

    this.cadastroService.cadastrar(this.formGroup.value)
    .subscribe(response => {
      console.log("Cadastrado com sucesso");
    },
      error => {
        console.log(error);
      }
    );
  }*/

}
