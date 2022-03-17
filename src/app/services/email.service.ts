/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/semi */
import { Injectable } from '@angular/core';
import { Email } from '../services/Email';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})

export class EmailService {
  emailListRef: AngularFireList<any>;
  emailRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.emailListRef = this.db.list('/email');
  }

  // Create
  createEmail(email: Email) {
    return this.emailListRef.push({
      name: email.name,
      email: email.email,
      subject: email.subject,
      mobile: email.mobile
    })
  }
  // Get Single
  getEmail(id: string) {
    this.emailRef = this.db.object('/email/' + id);
    return this.emailRef;
  }
  // Get List
  getEmailList() {
    this.emailListRef = this.db.list('/email');
    return this.emailListRef;
  }
  // Update
  updateEmail(id: any, email: Email) {
    return this.emailRef.update({
      name: email.name,
      email: email.email,
      subject: email.subject,
      mobile: email.mobile
    })
  }
  // Delete
  deleteEmail(id: string) {
    this.emailRef = this.db.object('/email/' + id);
    this.emailRef.remove();
  }
}