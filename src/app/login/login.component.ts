import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AppService} from '../app.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  credentials ={
    username :'',
    password:''
  }

  constructor(private fb:FormBuilder,private appService:AppService,private router:Router) {
 }

  ngOnInit() {
    this.loginForm=this.fb.group({
  username :['',Validators.required],
  password :['',Validators.required]
    });
  }
login(){
  this.appService.authenticate(this.credentials,()=>{
    console.log('valid !');
    this.router.navigateByUrl('/home');

  })
}
}
