/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SharePage } from '../share/share.page';
import { Email } from '../services/Email';
import { EmailService } from './../services/email.service';


interface StudentData {
  Name: string;
  Age: number;
  Address: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  // Email Start
  Emails = [];
  userEmail: string;
  // Email ends

  // CRUD student starts
  studentList = [];
  studentData: StudentData;
  studentForm: FormGroup;
  // Crud student ends

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private firebaseService: FirebaseService,
    public fb: FormBuilder,
    private aptService: EmailService,
    public modalController: ModalController,
  ) { this.studentData = {} as StudentData; }

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

    // Email start
    this.fetchEmails();
    let emailRes = this.aptService.getEmailList();
    emailRes.snapshotChanges().subscribe(res => {
      this.Emails = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Emails.push(a as Email);
      });
    });
    // Email ends

    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    });


    this.studentForm = this.fb.group({
      Name: ['', [Validators.required]],
      Age: ['', [Validators.required]],
      Address: ['', [Validators.required]]
    })

    this.firebaseService.read_students().subscribe(data => {

      // eslint-disable-next-line arrow-body-style
      this.studentList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
        };
      })
      console.log(this.studentList);

    });

  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      });
  }

  CreateRecord() {
    console.log(this.studentForm.value);
    this.firebaseService.create_student(this.studentForm.value).then(resp => {
      this.studentForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.firebaseService.delete_student(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.firebaseService.update_student(recordRow.id, record);
    recordRow.isEdit = false;
  }

  //For the emails
  fetchEmails() {
    this.aptService.getEmailList().valueChanges().subscribe(res => {
      console.log(res);
    });
  }
  deleteEmail(id) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteEmail(id);
    }
  }

}
