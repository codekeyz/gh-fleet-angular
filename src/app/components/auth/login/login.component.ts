import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../providers/auth.service';
import { DataService } from '../../../providers/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private authSvc: AuthService, private dataSvc: DataService) {}

  ngOnInit() {}

  login() {
    this.authSvc
      .login(this.email, this.password)
      .then(user => {
        return this.dataSvc.getMyAccount().toPromise();
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
