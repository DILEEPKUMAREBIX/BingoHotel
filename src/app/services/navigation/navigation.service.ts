import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

interface IMenuItem {
  type: string,       // Possible values: link/dropDown/icon/separator/extLink
  name?: string,      // Used as display text for item and title for separator type
  state?: string,     // Router state
  icon?: string,      // Item icon name
  tooltip?: string,   // Tooltip text
  disabled?: boolean, // If true, item will not be appeared in sidenav.
  sub?: IChildItem[],  // Dropdown items
  isRestaurent?: boolean  // Dropdown items
}
interface IChildItem {
  name: string,       // Display text
  state: string       // Router state
}

@Injectable()
export class NavigationService {
  constructor() {}

  defaultMenu:IMenuItem[] = [
    {
      name: 'DASHBOARD',
      type: 'link',
      tooltip: 'Dashboard',
      icon: 'dashboard',
      state: 'dashboard'
    },
    {
      name: 'Restaurants',
      type: 'link',
      tooltip: 'Guides',
      icon: 'local_bar',
      state: 'restaurants/profiles',
    },
    {
      name: 'Users',
      type: 'link',
      tooltip: 'Users',
      icon: 'account_circle',
      state: 'users'
    },
    
    // {
    //   name: 'Manage Restaurants',
    //   type: 'link',
    //   tooltip: 'Nearby',
    //   icon: 'map',
    //   state: 'explorenearby'
    // },
    // {
    //   name: 'Restuarant Map',
    //   type: 'link',
    //   tooltip: 'Map',
    //   icon: 'add_location',
    //   state: 'map'
    // },
    // {
    //   name: 'Push Notification',
    //   type: 'link',
    //   tooltip: 'Nearby',
    //   icon: 'chat_bubble',
    //   state: 'pushnotification'
    // },
    // {
    //   name: 'Message Template',
    //   type: 'link',
    //   tooltip: 'Nearby',
    //   icon: 'mode_edit',
    //   state: 'messagetemplate'
    // },
    // {
    //   name: 'User Segments',
    //   type: 'link',
    //   tooltip: 'Nearby',
    //   icon: 'apps',
    //   state: 'usersegments'
    // },
    // {
    //   name: 'Geo Regions Map',
    //   type: 'link',
    //   tooltip: 'Nearby',
    //   icon: 'public',
    //   state: 'georegion'
    // },
    // {
    //   name: 'Geo Triggers',
    //   type: 'link',
    //   tooltip: 'Nearby',
    //   icon: 'gps_fixed',
    //   state: 'geotrigger'
    // },
    // {
    //   name: 'Add deals',
    //   type: 'link',
    //   tooltip: 'Nearby',
    //   icon: 'card_giftcard',
    //   state: 'adddeal'
    // },
    // {
    //   name: 'Track deals',
    //   type: 'link',
    //   tooltip: 'Nearby',
    //   icon: 'gamepad',
    //   state: 'trackdeal'
    // },
    // {
    //   name: 'Users List',
    //   type: 'link',
    //   tooltip: 'UsersList',
    //   icon: 'person',
    //   state: 'userslist'
    // },
    {
      name: 'Message',
      type: 'link',
      tooltip: 'Nearby',
      icon: 'message',
      state: 'message'
    },
    {
      name: 'Settings',
      type: 'link',
      tooltip: 'Settings',
      icon: 'message',
      state: 'editprofile',
      isRestaurent: true
    },
    // {
    //   name: 'Money',
    //   type: 'link',
    //   tooltip: 'Nearby',
    //   icon: 'money',
    //   state: 'money'
    // },
    // {
    //   name: 'CALENDAR',
    //   type: 'link',
    //   tooltip: 'Calendar',
    //   icon: 'date_range',
    //   state: 'calendar'
    // }
  ]

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle:string = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();
}
