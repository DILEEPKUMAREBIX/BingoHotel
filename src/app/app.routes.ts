import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/common/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/common/layouts/auth-layout/auth-layout.component';

import { AuthGuard } from './services/auth/auth.guard';
import { ViewprofileComponent } from './views/viewprofile/viewprofile.component';
import { ExplorenearbyComponent } from './views/explorenearby/explorenearby.component';
import { PushnotificationComponent } from './views/pushnotification/pushnotification.component';
import { MessagetemplateComponent } from './views/messagetemplate/messagetemplate.component';
import { UsersegmentsComponent } from './views/usersegments/usersegments.component';
import { GeoregionComponent } from './views/georegion/georegion.component';
import { GeotriggerComponent } from './views/geotrigger/geotrigger.component';
import { AdddealComponent } from './views/adddeal/adddeal.component';
import { TrackdealComponent } from './views/trackdeal/trackdeal.component';
import { MessageComponent } from './views/message/message.component';
import { UserslistComponent } from './views/userslist/userslist.component';
import { MoneyComponent } from './views/money/money.component';
import { UsersComponent } from './views/users/users.component';
import { UsersblockedComponent } from './views/usersblocked/usersblocked.component';
import { SigninComponent } from './views/signin/signin.component';
import { UserprofileComponent } from './views/userprofile/userprofile.component';
import { EditprofileComponent } from './views/editprofile/editprofile.component';


// import { AppCalendarComponent } from './views/app-calendar/app-calendar.component';


export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
//   {
//   path: 'calendar',
//   component: AppCalendarComponent
// },
  { path: '', component: MessageComponent, data: { title: 'Inbox' } },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: './views/sessions/sessions.module#SessionsModule',
        data: { title: 'Session'}
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        data: { title: 'Dashboard', breadcrumb: 'Dashboard'}
      },
      {
        path: 'restaurants',
        loadChildren: './views/others/others.module#OthersModule',
        data: { title: 'Restaurants', breadcrumb: 'Restaurants'}
      },
      {
        path: 'map',
        loadChildren: './views/map/map.module#AppMapModule',
        data: { title: 'Active Guide Map', breadcrumb: 'Active Guide Map'}
       },

      // {
      //   path: 'nearby',
      //   loadChildren: './views/dragndrop/dragndrop.module#DragndropModule',
      //   data: { title: 'Nearby', breadcrumb: 'Nearby'}
      // },

      // },
      // {
      //   path: 'deals',
      //   loadChildren: './views/deals/deals.module#DealsModule',
      //   data: { title: 'deals', breadcrumb: 'DEALS'}
      // }
      // {
      //   path: 'deals',
      //   loadChildren: './views/deals/app-calendar.module#AppCalendarModule',
      //   data: { title: 'Deals', breadcrumb: 'Deals'}
      // },

      {
        path: 'viewprofile',
        component : ViewprofileComponent
      },

      {
        path: 'userprofile',
        component : UserprofileComponent
      },
      {
        path: 'editprofile',
        component : EditprofileComponent
      },
      {
        path: 'explorenearby',
        component : ExplorenearbyComponent
      },

      {
        path: 'pushnotification',
        component : PushnotificationComponent
      },

      {
        path: 'messagetemplate',
        component : MessagetemplateComponent
      },

      {
        path: 'usersegments',
        component : UsersegmentsComponent
      },

      {
        path: 'georegion',
        component : GeoregionComponent
      },

      {
        path: 'geotrigger',
        component : GeotriggerComponent
      },

      {
        path: 'trackdeal',
        component : TrackdealComponent
      },

      {
        path: 'adddeal',
        component : AdddealComponent
      },

      {
        path: 'message',
        component : MessageComponent
      },

      {
        path: 'userslist',
        component : UserslistComponent
      },
      {
        path: 'money',
        component : MoneyComponent
      },
      {
        path: 'users',
        component : UsersComponent
      },
      {
        path: 'usersblocked',
        component : UsersblockedComponent
      }

    ]
  },
  { path: 'login', component: SigninComponent, data: { title: 'Login' } },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
