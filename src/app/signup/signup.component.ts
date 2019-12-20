import { Component, OnInit } from '@angular/core';
import { BackendService } from '../BackendService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: String = ''
  password: String = ''
  age: Number = 0
  gender: String = ''
  phone: String = ''
  role: String = ''

  constructor(public MyBackendService: BackendService,
    public MyRouter: Router) { }

  ngOnInit() {
  }

  handleSignUp() {
    let dataToBeSentToBackend = {
      username: this.username,
      password: this.password,
      age: this.age,
      phone: this.phone,
      gender: this.gender,
      role:this.role
    }

    this.MyBackendService.UserSignUp(dataToBeSentToBackend)
      .subscribe((resp: any) => {
        if (resp.message === 'success') {
          this.MyRouter.navigate(['/signin'])
        } else {
          alert("error")
        }
      })
  }

}
