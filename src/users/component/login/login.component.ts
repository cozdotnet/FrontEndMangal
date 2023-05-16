import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // url: string= 'https://localhost:7065/api/User/login' ;
  // username: string = 'admin';
  // password: string = 'Password';
  // token: string | null = null;

  // constructor(private http: HttpClient) {}

  // ngOnInit() {}

  // onSubmit() {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');

  //   const body = JSON.stringify({
  //     username: this.username,
  //     password: this.password
  //   });

  //   // this.http.post('https://localhost:7065/api/User/login',{ headers })
  //   //   .subscribe(response => {
  //   //     if (response.status === 200) {
  //   //       const token = response.headers.get('Authorization');
  //   //       this.storeToken(token);
  //   //       this.navigateToHome();
  //   //     } else {
  //   //       console.log('Login failed');
  //   //     }
  //   //   });
  //   this.http.post(this.url, { headers, observe: 'response' })
  //   .subscribe(
  //     (response: HttpResponse<any>) => {
  //       if (response.status === 200) {
  //         const token = response.headers.get('Authorization');
  //         this.storeToken(token);
  //         this.navigateToHome();
  //       } else {
  //         console.log('Login failed');
  //       }
  //     },
  //     (error) => {
  //       console.log('An error occurred:', error);
  //     }
  //   );
  //   }

  //   storeToken(token: string): void {
  //     localStorage.setItem('token', token);
  //   }
    

  // navigateToHome() {
  //   // Navigate to the home page.
  //   this.router.navigate(['/']);
  // }
  passwordHidden = true;

  username = 'admin';
  password = 'admin';

  constructor(private LoginService: LoginService) {}

  // onLogin() {
  //   this.LoginScreenService.login(this.username, this.password).subscribe((response) => {
  //     console.log(response); // do something with the response
  //   });
  // }
  
  togglePasswordVisibility(passwordInput: HTMLInputElement) {
    this.passwordHidden = !this.passwordHidden;
    passwordInput.type = this.passwordHidden ? 'password' : 'text';
  }
}
