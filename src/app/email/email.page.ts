/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, NgZone, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {

  //this is for the options in html file
  private animation:AnimationItem;
  options:AnimationOptions = {
    path:'../assets/1.json'
  };

  constructor(private ngZone:NgZone) { }

  // this is for the created in the html file
  created(animation:AnimationItem) {
    console.log(animation);
    this.animation=animation;
  }

  // this is for the play and pause button in html
  play() {
    this.ngZone.runOutsideAngular(() => this.animation.play());
  }
  pause() {
    this.ngZone.runOutsideAngular(() => this.animation.pause());
  }

  ngOnInit() {
  }

}
