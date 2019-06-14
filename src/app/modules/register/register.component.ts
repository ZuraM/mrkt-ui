import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../shared/validators';

@Component({
  selector: 'mrkt-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        email: ['', Validators.compose([Validators.email, Validators.required])],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        fullName: ['', Validators.required],
        companyName: ['', Validators.required],
        position: ['', Validators.required],
        city: ['', Validators.required],
        bussinessPhone: ['', Validators.required],
        bussinessMail: ['', Validators.compose([Validators.required, Validators.email])],
        terms: [true, Validators.requiredTrue]
      },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }

  onSubmitRegister() {
    const data = this.registerForm.value;

    console.log(data);
  }
}
