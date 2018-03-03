import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router';
import { SignupDataService } from '../../../service/signup-data.service';

@Component({
    selector: 'signup-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

    title = 'What do you do?';
    workType: string;
    form: any;
    @Output()
    workCompleted: EventEmitter<any> = new EventEmitter<any>();

    constructor(private router: Router, private signupDataService: SignupDataService) {
    }

    ngOnInit() {
        this.workType = this.signupDataService.getWork();
        console.log('Work feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.signupDataService.setWork(this.workType);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            this.workCompleted.emit({'completed':'work','show':'personal'});
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/join/address']);
        }
    }
}
