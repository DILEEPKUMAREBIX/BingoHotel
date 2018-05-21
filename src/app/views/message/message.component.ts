import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { MatSidenav, MatDialog } from '@angular/material';

import { AppInboxService } from './app-inbox.service';
import { MailComposeComponent } from './mail-compose.component';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from "../../apiservice.service";

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [AppInboxService]
})
export class MessageComponent implements OnInit {
  isMobile;
  screenSizeWatcher: Subscription;
  isSidenavOpen: Boolean = true;
  selectToggleFlag = false;
  @ViewChild(MatSidenav) private sideNave: MatSidenav;
  messages;


  constructor(private router: Router,
    private media: ObservableMedia,
    public composeDialog: MatDialog,
    private inboxService: AppInboxService,
    private masterService: ApiserviceService, private httpClient:HttpClient) { }

  ngOnInit() {
    this.inboxSideNavInit();
    //this.messages = this.inboxService.messages;
    this.viewMessage();
  }
  openComposeDialog() {
    let dialogRef = this.composeDialog.open(MailComposeComponent);
    dialogRef.afterClosed().subscribe(result => { });
  }
  selectToggleAll() {
    this.selectToggleFlag = !this.selectToggleFlag;
    this.messages.forEach((msg) => { msg.selected = this.selectToggleFlag });
  }


  updateSidenav() {
    var self = this;
    setTimeout(() => {
      self.isSidenavOpen = !self.isMobile;
      self.sideNave.mode = self.isMobile ? 'over' : 'side';
    })
  }
  inboxSideNavInit() {
    this.isMobile = this.media.isActive('xs') || this.media.isActive('sm');
    this.updateSidenav();
    this.screenSizeWatcher = this.media.subscribe((change: MediaChange) => {
      this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
      this.updateSidenav();
    });
  }

  //viewMessages:any = [];
  viewMessage() {
    this.httpClient.get(this.masterService.apiRoot+'/portal/get-queries')
    .subscribe(
      (data:any) => {
        console.log("Done");
        this.messages = data;
        console.log(this.messages);
        return this.messages;
      }, (err: any) => {
        console.log(err);
      });
  }

  reply(id){
      console.log("component "+id);
      this.inboxService.reply(id);
      let dialogRef = this.composeDialog.open(MailComposeComponent);
      dialogRef.afterClosed().subscribe(result => { });
  }
}
