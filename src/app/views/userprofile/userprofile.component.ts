import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { UserprofileService } from "../userprofile/userprofile.service";
import { ApiserviceService } from "../../apiservice.service";

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: 'upload_url' });
  public hasBaseDropZoneOver: boolean = false;

  constructor(private masterService: ApiserviceService, public userprofile: UserprofileService) { }

  profile:any = [];
  ngOnInit() {
    this.profile = this.userprofile.profile;
    this.profile.avatar = this.masterService.apiRoot+this.profile.avatar;
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

}
