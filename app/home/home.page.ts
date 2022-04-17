
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

import { Contacts, Contact, ContactName, ContactField } from '@ionic-native/contacts/ngx'
import { CallNumber } from '@ionic-native/call-number/ngx'
import { SMS } from '@ionic-native/sms/ngx'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
myContacts : Contact[] = [];
masha = '';

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private con : Contacts,
    private callN : CallNumber,
    private sms : SMS,
    private toastCtrl : ToastController,

  ) {}


// getcon(event: any){  
// const serVal = event.target.value;
//   if (serVal && serVal.trim() != '') {
//     this.myContacts = this.myContacts.filter((c) => {
//       return (c.name.givenName.toLowerCase().indexOf(serVal.toLowerCase()) > -1
//      && c.name.familyName.toLowerCase().indexOf(serVal.toLowerCase()) > -1
//         || c.phoneNumbers[0].value.toLowerCase().indexOf(serVal.toLowerCase()) > -1
//     );
      
// });
//   }
// }
findcon(){
let mafi = this.masha;
if (mafi !<='' || mafi > '' || mafi != '') {
 return(this.loadContacts());  
}

}


  loadContacts(){
    let options = {
      filter: this.masha,
      multiple: true,
      hasPhoneNumber: true,
    };
    this.con.find(['*'], options).then((con: Contact[]) => {
      this.myContacts = con;
      console.log('Contacts:', con)
    });

  }

sendSms(conta : Contact){
this.sms.send(conta.phoneNumbers[0].value, 'This is a message test');
}
  call(conta: Contact){
this.callN.callNumber(conta.phoneNumbers[0].value , true);
}



  ngOnInit() {
  this.loadContacts();

 }

}
