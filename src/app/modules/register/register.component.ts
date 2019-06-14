import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../shared/validators';

import * as appStore from '../../store/app.reducers';
import * as appActions from '../../store/auth/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'mrkt-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<appStore.AppState>) { }

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        email: ['zuramaisuradze77@gmail.com', Validators.compose([Validators.email, Validators.required])],
        password: ['zura340028', Validators.required],
        confirmPassword: ['zura340028', Validators.required],
        fullName: ['Zurab Maisuradze', Validators.required],
        companyName: ['mrkt.com', Validators.required],
        position: ['Software Developer', Validators.required],
        city: ['Tbilisi', Validators.required],
        bussinessPhone: ['595230028', Validators.required],
        bussinessMail: ['zmaisuradze@mrkt.com', Validators.compose([Validators.required, Validators.email])],
        terms: [true, Validators.requiredTrue]
      },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }

  onSubmitRegister() {
    const data = this.registerForm.value;
    this.store.dispatch(new appActions.AddUser(data));
  }
}
