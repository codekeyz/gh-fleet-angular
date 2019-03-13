import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../providers/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  returnUrl: string;
  email: string;
  progressRef: NgProgressRef;

  enableLogin = true;

  constructor(
    private fb: FormBuilder,
    private progress: NgProgress,
    private route: ActivatedRoute,
    private router: Router,
    private authSvc: AuthService
  ) {}

  ngOnInit() {
    // get return url from route parameters or default to '/me/dashboard'
    this.returnUrl =
      this.route.snapshot.queryParams.returnUrl || '/me/dashboard';

    // get return email from route parameters or default to ''
    this.email = this.route.snapshot.queryParams.email || '';

    this.progressRef = this.progress.ref('authProgress');

    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: [
        this.email,
        Validators.compose([Validators.required, Validators.email])
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ]
    });
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.enableLogin = false;
    this.progressRef.start();
    this.authSvc
      .login(email, password)
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
