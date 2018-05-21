import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ViewprofileService } from "../viewprofile/viewprofile.service";
import { ApiserviceService } from "../../apiservice.service";

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: 'upload_url' });
  public hasBaseDropZoneOver: boolean = false;

  constructor(public viewprofile: ViewprofileService, private masterService: ApiserviceService) { }

  profile:any = [];
  images:any = {
    'cover':'',
    'logo':''
  }

  ngOnInit() {
    this.profile = this.viewprofile.profile;
    this.images.cover = this.masterService.apiRoot+'/'+this.profile.data.image;
    this.images.logo = this.masterService.apiRoot+'/'+this.profile.data.logo;
    var ccn = this.profile.data.ccn
    ccn = ccn.substr(ccn.length - 4)
    this.profile.data.ccn = "************"+ccn
    
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

}
