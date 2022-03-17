/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { EmailService } from './../services/email.service';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {

  // This is for the email
  emailForm: FormGroup;

  //this is for the options in html file
  private animation:AnimationItem;
  options:AnimationOptions = {
    path:'../assets/1.json'
  };

  // make private fields for the animation lottie with ngZone and aptService route and fb for the email
  constructor(
    private ngZone:NgZone,
    private aptService: EmailService,
    private router: Router,
    public fb: FormBuilder
  ) { }

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
    this.emailForm = this.fb.group({
      name: [''],
      email: [''],
      subject: [''],
      mobile: ['']
    });
  }
  formSubmit() {
    if (!this.emailForm.valid) {
      return false;
    } else {
      this.aptService.createEmail(this.emailForm.value).then(res => {
        console.log(res);
        this.emailForm.reset();
        this.router.navigate(['/tabs2/dashboard']);
      })
        .catch(error => console.log(error));
    }
  }

}
