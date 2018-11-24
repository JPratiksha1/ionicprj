import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Toast } from '@ionic-native/toast/ngx';
import {  ViewChildren, QueryList } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
// import {  ToastController } from 'ionic-angular';
import { AlertController } from '@ionic/angular';

import { HomePage } from './home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  rootPage: any = HomePage;
  public alertShown:boolean = false;
  
  
  
   constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alertCtrl: AlertController) {
   platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      // platform.registerBackButtonAction(() => 
      this.platform.backButton.subscribe(() => 
      
      {
        if (this.alertShown==false) {
          this.presentAlertConfirm();  
        }
      }, 0)
    });
  }

 async presentAlertConfirm() {
    const alert= await
    this.alertCtrl.create({
      header: 'Confirm Exit',
      message: 'Do you want Exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.alertShown=false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            navigator['app'].exitApp(); 
          }
        }
      ]
    });
   await  alert.present().then(()=>{
      this.alertShown=true;
    });
  }

    // set up hardware back button event.
//     rootPage:any = HomePage;
//   public counter=0;

//     constructor(
//         public platform: Platform,
//         private splashScreen: SplashScreen,
//         private statusBar: StatusBar,
//         public toast: Toast
//        ) 
    
   
// {
//       this.platform.ready().then(() => {
//       this.statusBar.styleDefault();
//       this.splashScreen.hide();


// this.platform.backButton.subscribe(() => {
//       // this.platform.registerBackButtonAction(() => {
//         if (this.counter == 0) {
//           this.counter++;
//           this.presentToast();
//           setTimeout(() => { this.counter = 0 }, 3000)
//         } else {
//           // console.log("exitapp");
//           navigator['app'].exitApp(); 
//         }
//       }, 0)
//     });

//   }
//   presentToast(){
//   let toast=this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
//   toast => {
//     console.log(toast);
//   }
// );
  
  
//   }
  
  
  
  // presentToast() {
  //   let toast = this.toastCtrl.create({
  //     message: "Press again to exit",
  //     duration: 3000,
  //     position: "middle"
  //   });
  //   toast.present();
  // }
}
   
    
