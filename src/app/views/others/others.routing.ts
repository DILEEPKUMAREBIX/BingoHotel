import { Routes } from '@angular/router';

import { AppGalleryComponent } from './app-gallery/app-gallery.component';
import { AppPricingComponent } from './app-pricing/app-pricing.component';
import { AppUsersComponent } from './app-users/app-users.component';
  import { AppBlankComponent } from './app-blank/app-blank.component';

export const OthersRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'profiles'
      },
      {
      path: 'register',
      component: AppGalleryComponent,
      data: { title: 'Register', breadcrumb: 'Register' }
    }, {
      path: 'pending',
      component: AppPricingComponent,
      data: { title: 'Pending', breadcrumb: 'Pending' }
    }, {
      path: 'profiles',
      component: AppUsersComponent,
      data: { title: 'Profiles', breadcrumb: 'Profiles' }
    }, {
      path: 'blank',
      component: AppBlankComponent,
      data: { title: 'Blank', breadcrumb: 'Blank' }
    }]
  }
];
