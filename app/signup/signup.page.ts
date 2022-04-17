import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

 import { Contacts, Contact, ContactName, ContactField } from '@ionic-native/contacts/ngx'




@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  fname = '';
  lname = '';
  mname = '';
pnum : string;


  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private con: Contacts,
    private toast : ToastController,
  ) { }
  


  createContacts() {
    let conta: Contact = this.con.create();
    conta.name = new ContactName(null, this.fname, this.lname, this.mname)
    conta.phoneNumbers = [new ContactField('mobile', this.pnum)];
    conta.save().then(
      async () =>{
        let toast = await this.toast.create({
          message: 'Contact created successfully', duration: 3000
        }); toast.present();
      }
      
    );

  }



}
