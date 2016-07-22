import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth';

@Component({
  selector: 'login',
  templateUrl: './user.login.component.html',
  styleUrls: ['./user.login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmit(email, password) {
    this.authService.login(email, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
      }
    });
  }
}
