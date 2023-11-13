import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() { }

  login() {
    // Misalnya, Anda bisa memeriksa kredensial dan mengarahkan pengguna ke halaman beranda jika berhasil.
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/dashboard'])
    } else {
      alert('Login Gagal. Periksa kembali username dan password Anda.');
    }
  }
}
