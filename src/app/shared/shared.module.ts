import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HelpersModule } from './helpers/helpers.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HelpersModule
  ],
  declarations: [],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
