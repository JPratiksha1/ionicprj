import { Injectable } from '@angular/core';
import { Toast } from '@ionic-native/toast/ngx';



@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast : Toast) { }
  login() {
    console.log('hello');
        let toast = this.toast.show(`failed` ,'2000','top');
        // .subscribe(
          // toast => {
          //   console.log(toast);
          // }
        // );
  }
}
