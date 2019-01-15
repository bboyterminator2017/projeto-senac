import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';


platformBrowserDynamic().bootstrapModule(AppModule);



export class Main{

    constructor(public navCtrl: NavController,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController
    ){


    }
         logout(){
        return this.afAuth.auth.signOut();
      }
}