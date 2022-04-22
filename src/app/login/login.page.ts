/* eslint-disable prefer-const */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-inferrable-types */
// login.page.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { ModalController } from '@ionic/angular';
import { SharePage } from '../share/share.page';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {


  validationsForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    public modalController: ModalController,
    private alertCtrl: AlertController,
    private platform: Platform

  ) { }

  // Plugin Condovar
  async showPlatform() {
    let text = 'I run on: ' + this.platform.platforms();
    let alert = this.alertCtrl.create({
      message: text,
      buttons: ['Ok']
    });
    (await alert).present();
  }

  // the object from the login html, share button class
  async openShare() {
    const modal = await this.modalController.create({
      component:SharePage,
      initialBreakpoint:0.6,
      breakpoints:[0,0.6],
      cssClass:'shareModal'
    });
    return await modal.present();
  }

  // the ion slides options class from login.page.html
  option ={
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true,
  };

  ngOnInit() {

    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }
  validationMessages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };


  loginUser(value) {
    this.authService.loginUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.navCtrl.navigateForward('/tabs2/dashboard');
      }, err => {
        this.errorMessage = err.message;
      });
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }

}
