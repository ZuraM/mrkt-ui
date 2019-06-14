import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebComponent } from './web.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../shared/auth.guard';

export const webRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: WebComponent,
    children: [
      {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
]);
