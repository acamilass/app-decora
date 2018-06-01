import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../data-model';
import { ServeService } from '../shared/helpers/serve.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  user: User;
  types = [
    { value: true, viewValue: 'Admin' },
    { value: false, viewValue: 'User' },
  ];

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
    this.cadastroForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      name: ['', [
        Validators.required
      ]],
      admin: ['', [
        Validators.required
      ]]

    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.cadastroForm.valid) {
      this.user = Object.assign({}, this.cadastroForm.value);
      this.serve
      .signUp(this.user)
      .then(result => {
        this.toastr.success("Usuário cadastrado com sucesso");
      })
      .catch(error => this.toastr.warning(error));
    }
  }

}
