import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appStore from '../../store/app.reducers';

@Component({
  selector: 'mrkt-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private store: Store<appStore.AppState>
  ) { }

  ngOnInit() {
  }

}
