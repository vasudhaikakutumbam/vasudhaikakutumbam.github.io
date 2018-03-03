import { Component, OnInit } from '@angular/core';
import { SignupDataService } from '../../service/signup-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formData;
  activeTab: String = 'user';
  completedForms: String[] = [];
  userCredentialsVisibility: boolean = true;
  personalVisibility: boolean = false;
  workVisibility: boolean = false;


  constructor(private signupDataService: SignupDataService) { }

  ngOnInit() {
    this.formData = this.signupDataService.getFormData();
    this.signupDataService.resetFormData();
  }

  showForms(event) {
    if (this.completedForms.indexOf(event.completed) == -1) {
      this.completedForms.push(event.completed);
    }
    if (event.show == 'user') {
      this.userCredentialsVisibility = true;
      this.personalVisibility = false;
      this.workVisibility = false;
      this.activeTab = 'user';
    } else if (event.show == 'personal') {
      this.userCredentialsVisibility = false;
      this.personalVisibility = true;
      this.workVisibility = false;
      this.activeTab = 'personal';
    } else if (event.show == 'work') {
      this.userCredentialsVisibility = false;
      this.personalVisibility = false;
      this.workVisibility = true;
      this.activeTab = 'work';
    }
  }
}