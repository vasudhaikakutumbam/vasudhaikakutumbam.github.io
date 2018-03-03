import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'signup-navbar',
  templateUrl: './signup-navbar.component.html',
  styleUrls: ['./signup-navbar.component.css']
})
export class SignupNavbarComponent implements OnInit {
  @Input()
  activeTab;
  @Input()
  completedForms: String[];
  constructor() { }

  ngOnInit() {
    console.log(this.activeTab);
  }

  addActive(tabName): boolean {
    if (this.activeTab == tabName) {
      return true;
    }
    return false;
  }

  addComplete(tabName): boolean {
    if (this.completedForms.indexOf(tabName) > -1) {
      return true;
    }
    return false;
  }
}
