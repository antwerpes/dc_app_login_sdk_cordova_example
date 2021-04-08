import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

declare let DocCheckAppLogin: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonInput) loginIdTextInput: IonInput;
  data = new Map()

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  openLogin(event: Event) {
    const loginId = this.loginIdTextInput.value + ''
    if (loginId === null || loginId === undefined || loginId.length === 0) {
      console.log("loginId cant be empty");  
    }
    DocCheckAppLogin.openLogin(
      result => {
        if (result["data"]) {
          this.data.clear();
          console.log("received user data we can display now");
          for (const [key, value] of Object.entries(result["data"])) {
            this.data.set(key, value);
          }
          this.changeDetectorRef.detectChanges();
        }
      },
      result => console.log("error: " + JSON.stringify(result)),
      loginId
    );
  }

}
