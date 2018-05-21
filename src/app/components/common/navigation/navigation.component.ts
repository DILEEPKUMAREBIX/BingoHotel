import { Component, OnInit } from '@angular/core';
import { NavigationService } from "../../../services/navigation/navigation.service";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.template.html'
})
export class NavigationComponent {
  hasIconTypeMenuItem;
  iconTypeMenuTitle:string;
  menuItems:any[];
  isAdminLogin:boolean = false;

  constructor(private navService: NavigationService) {}
  ngOnInit() {
    this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;

    // Initialize Perfect scrollbar for sidenav
    var loginData = JSON.parse(localStorage.getItem('loginData'))
    console.log(loginData);
    if (loginData == 'admin') {
      this.isAdminLogin = true;
    }

    // Loads menu items from NavigationService
    this.navService.menuItems$.subscribe(menuItem => {
      this.menuItems = menuItem;
      //Checks item list has any icon type.
      this.hasIconTypeMenuItem = !!this.menuItems.filter(item => item.type === 'icon').length;
    });
  }

  // Only for demo purpose
  addMenuItem() {
    this.menuItems.push({
      name: 'ITEM',
      type: 'dropDown',
      tooltip: 'Item',
      icon: 'done',
      state: 'material',
      sub: [
        {name: 'SUBITEM', state: 'cards'},
        {name: 'SUBITEM', state: 'buttons'}
      ]
    });
  }
}