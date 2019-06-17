import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../store/auth/auth.reducers';
import * as authActions from '../../store/auth/auth.actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mrkt-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userInfoForm: FormGroup;

  constructor(
    private store: Store<fromApp.AppState>,
    private authStore: Store<fromAuth.AuthState>,
    private fb: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userInfoForm = this.fb.group({
      email: [''],
      position: [''],
      password: [''],
      firstName: [''],
      lastName: [''],
      companyName: [''],
      country: ['Georgia'],
      bussinessPhone: [''],
      bussinessMail: ['']
    });

    this.activatedRoute.params.subscribe(params => {
      this.authStore.dispatch(new authActions.SetUserInfo(params['id']));
    });

    this.authStore.pipe(select(fromAuth.selectUserInfo)).subscribe(user => {
      this.userInfoForm.patchValue(user);
    });

  }

}
