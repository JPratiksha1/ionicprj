import { Component, OnInit} from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';


// import { } from 'ionic-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  

  
      constructor(private inAppBrowser:InAppBrowser) { }
      
      
      
      ngOnInit(){
        // let backAction = this.platform.registerBackButtonAction(() => {
       
     const options: InAppBrowserOptions ={
                    zoom:'no',
                    location:'no',
                    hideurlbar:'yes'
                    
     }
         const browser = this.inAppBrowser.create('http://192.168.2.32/','_blank',options);
         
  }
        
  
     }  
                  
         
      
      

          // console.log("second");
      //     this.navCtrl.pop();
      //     backAction();
      // },2)
   
 // ionViewDidLoad() {
  // console.log("ionViewDidLoad second page");
 // }


      //   
