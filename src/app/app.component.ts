import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  // Taking rhe media width in variable
  mobileMedia: any = window.matchMedia('(max-width: 520px)');
  mobileMedia1: any = window.matchMedia('(max-width: 768px)');

  // Use the mobileMedia property in the constructor
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    public router: Router
  ) {
    this.initializeApp();

    if(this.mobileMedia.matches)
    {
      alert('Media matches');
    };


    if(this.mobileMedia1.mathces)
    {
      alert('Media matches');
    };
  }

  // The splash setup with routing
  initializeApp() {
    this.platform.ready().then (() => {
      this.statusBar.styleDefault();
      this.router.navigateByUrl('splash');
    });
  }

}
