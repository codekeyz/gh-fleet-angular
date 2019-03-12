import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../providers/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  returnUrl: string;
  progressRef: NgProgressRef;

  enableLogin = true;

  constructor(
    private progress: NgProgress,
    private route: ActivatedRoute,
    private router: Router,
    private authSvc: AuthService
  ) {}

  ngOnInit() {
    // get return url from route parameters or default to '/me/dashboard'
    this.returnUrl =
      this.route.snapshot.queryParams.returnUrl || '/me/dashboard';

    this.progressRef = this.progress.ref('myProgress');
  }

  login() {
    this.enableLogin = false;
    this.progressRef.start();
    this.authSvc
      .login(this.email, this.password)
      .then(() => {
        this.enableLogin = true;
        this.progressRef.complete();
        this.router.navigate([this.returnUrl]);
      })
      .catch(err => {
        this.progressRef.complete();
        this.enableLogin = true;
      });
  }
}
