import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../providers/auth.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private authSvc: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group(
      {
        username: [
          '',
          Validators.compose([Validators.required, Validators.minLength(6)])
        ],
        email: [
          '',
          Validators.compose([Validators.required, Validators.email])
        ],
        password: ['', Validators.required],
        passwordagain: ['']
      },
      {
        validator: this.checkPasswords
      }
    );
  }

  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.passwordagain.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  register() {
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    const username = this.registerForm.value.username;
    this.authSvc
      .register(username, email, password)
      .toPromise()
      .then(() => {
        this.router.navigate(['/auth/signin'], {
          queryParams: { email }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}
