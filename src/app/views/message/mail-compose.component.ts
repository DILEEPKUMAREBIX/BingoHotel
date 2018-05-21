import { Component, OnInit, ViewChild } from '@angular/core';
import { AppInboxService } from './app-inbox.service';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mail-compose',
  templateUrl: './mail-compose.template.html',
  providers: [AppInboxService]
})
export class MailComposeComponent implements OnInit {
  newMailData = {}
  mailForm: FormGroup;

  constructor(private inboxService: AppInboxService, private composeDialog: MatDialog) { }

  ngOnInit() {
    this.mailForm = new FormGroup({
      // to: new FormControl('', [
      //   Validators.required,
      //   Validators.email
      // ]),
      // subject: new FormControl('', [
      //   Validators.required
      // ]),
      message: new FormControl('', [
        Validators.required
      ])
    });

  }

  sendEmail() {
    console.log(this.mailForm.value);
    this.inboxService.message(this.mailForm.value);
  }
  closeDialog() {

  }

  // replyEmail: String;
  // reply(){
  //   this.replyEmail = this.inboxService.replyEmail;
  //   console.log("mail compose "+this.replyEmail);
  // }
}
