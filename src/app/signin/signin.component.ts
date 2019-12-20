import { Component, OnInit } from '@angular/core';
import { BackendService } from '../BackendService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username: String = 'moniem'
  password: String = '123'
  constructor(public MyBackendService: BackendService,
    public MyRouter: Router) { }

  ngOnInit() {
  }

  
  handleSignIn() {
    let dataToBeSentToBackend = {
      username: this.username,
      password: this.password
    }

    this.MyBackendService.UserSignIn(dataToBeSentToBackend)
      .subscribe((resp: any) => {
        if (resp.message === 'success') {
          localStorage.setItem('role',resp.data.role)
          this.MyRouter.navigate(['/categories'])
        } else {
          alert("error")
        }
      })
  }

}
