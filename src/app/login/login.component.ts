import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../data-model';
import { ServeService } from '../shared/helpers/serve.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User;

  constructor(
    private fb: FormBuilder,
    private serve: ServeService,
    private router: Router,
    private toastr: ToastrService, 
    private vcr: ViewContainerRef
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required
      ]],

    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.loginForm.valid) {
      this.user = Object.assign({}, this.loginForm.value);
      this.serve
        .auth(this.user.password, this.user)
        .then(result => {
          this.router.navigate(['/home'])
        })
        .catch(error => this.toastr.warning(error));
    }

  }

}
