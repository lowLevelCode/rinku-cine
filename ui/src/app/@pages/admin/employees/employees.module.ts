import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AvatarModule } from 'src/app/shared/components/avatar/avatar.module';


@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatCardModule,
    MatTableModule,
    FlexLayoutModule,
    AvatarModule
  ]
})
export class EmployeesModule { }
