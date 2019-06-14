import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WebComponent } from './web.component';
import { webRouting } from './web-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, UserProfileComponent, WebComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    webRouting
  ]
})
export class WebModule { }
