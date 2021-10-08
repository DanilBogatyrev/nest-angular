import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Output() isCloseWindow = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { }
  error: string;
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ])
  });

  ngOnInit(): void {
    console.log('token from localstorage', localStorage.token);
  }

  login(): void {
    console.log('form', this.form.value);
    this.authService.login(this.form.value).subscribe(
      res => { this.error = ''; this.authService.saveToken(res.token);  },
      err => { console.log('error', err.error.message); this.error = err.error.message; }
      );
  }

  signUp(): void {
    this.authService.registration(this.form.value).subscribe(
      res => { this.error = ''; console.log('registration res', res); this.authService.saveToken(res.token); },
      err => { this.error = err.error.message; console.log('registration err', err); }

    );
  }

  signOut(): void {
    localStorage.token = '';
  }

  closeWindow(): void {
    console.log('close auth');
    this.isCloseWindow.emit(true);
  }

}
