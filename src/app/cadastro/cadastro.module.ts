import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CadastroRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [CadastroComponent]
})
export class CadastroModule { }
