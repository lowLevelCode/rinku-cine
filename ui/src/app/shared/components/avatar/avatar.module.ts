import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { MatCardModule } from "@angular/material/card";



@NgModule({
  declarations: [
    AvatarComponent
  ],
  imports: [
    CommonModule, 
    MatCardModule
  ],
  exports:[AvatarComponent]
})
export class AvatarModule { }
