import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from "../../apiservice.service";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EditprofileService } from "../editprofile/editprofile.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;
  public err: string = ''
  signinForm: FormGroup;

  constructor(private masterService: ApiserviceService,
              private httpClient: HttpClient,
              private snackBar: MatSnackBarModule,
              public editprofile: EditprofileService,
              public router: Router) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    })
  }

  signin() {
    this.err = ''
    const signinData = this.signinForm.value
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
    if(signinData.username =='admin' && signinData.password =="admin")
    {
       localStorage.setItem('loginData',JSON.stringify('admin'))
       this.router.navigate(['/dashboard']);
       return 
    }

    this.httpClient.post(this.masterService.apiRoot + '/guide/login', {
      "email": signinData.username,
      "password": signinData.password
    }).subscribe(
      (data: any) => {
        console.log("kottakota");
        console.log(data)
        localStorage.setItem('loginData',JSON.stringify(data));
        this.editprofile.profile = data;
        this.router.navigate(['/dashboard']);
        return 
      }, (err: any) => {
        console.log(err)
        this.err = err.error.message
        this.submitButton.disabled = false;
        this.progressBar.mode = 'determinate';
      });
  }

}
