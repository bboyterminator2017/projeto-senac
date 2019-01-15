import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { CadastroPage } from '../pages/cadastro/cadastro';


platformBrowserDynamic().bootstrapModule(AppModule);



export class Main{

    constructor(public navCtrl: NavController,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public db: AngularFireDatabase
    ){
        this.formGroup

    }
         
    
    /*logout(){
        return this.afAuth.auth.signOut();
     }*/
}