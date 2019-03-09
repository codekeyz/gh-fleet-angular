import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../providers/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authSvc: AuthService
  ) {}

  ngOnInit() {
    // get return url from route parameters or default to '/me/dashboard'
    this.returnUrl =
      this.route.snapshot.queryParams.returnUrl || '/me/dashboard';
  }

  login() {
    this.authSvc
      .login(this.email, this.password)
      .then(() => {
        this.router.navigate([this.returnUrl]);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
