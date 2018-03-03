import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserCredentials } from '../../../service/signup.model';
import { SignupDataService } from '../../../service/signup-data.service';

@Component({
  selector: 'signup-user-credentials',
  templateUrl: './user-credentials.component.html',
  styleUrls: ['./user-credentials.component.css']
})
export class UserCredentialsComponent implements OnInit {
  userCredentials: UserCredentials;
  form:any;
  @Output()
  userCredentialsCompleted:EventEmitter<any> = new EventEmitter<any>();

  constructor(private signupDataService:SignupDataService) {}

  ngOnInit() {
    this.userCredentials = this.signupDataService.getUserCredentials();
  }

  save(userCredentialsForm:any){
    if(!userCredentialsForm.valid){
      return false;
    }
    this.signupDataService.setUserCredentials(this.userCredentials);
    return true;
  }

  goToNext(userCredentialsForm:any){
    if(this.save(userCredentialsForm)){
      this.userCredentialsCompleted.emit({'completed':'user','show':'personal'});
    }
  }

}
