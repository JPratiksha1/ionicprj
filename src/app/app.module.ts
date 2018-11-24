import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule, Router } from '@angular/router';
import { HomePage } from './home/home.page';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from 'ionic-angular';
 import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertController } from 'ionic-angular';

// import { Toast } from '@ionic-native/toast/ngx';


// import { RestapiService } from './restapi.service';




// import { InAppBrowser } from '@ionic-native/in-app-browser';
import { InAppBrowser,InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';

// import { Toast } from '@ionic-native/toast';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,HttpClientModule,IonicModule.forRoot(), AppRoutingModule],
  providers: [
    HomePage,
   SplashScreen,
   StatusBar,
  Platform,
  AlertController,
 
   
   
    
   
    // RestapiService,
    InAppBrowser,
   
     
    

    
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
