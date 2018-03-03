import { Component } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './about.component.html'
})
export class AboutComponent { 
    pageTitle:String = 'Somethings about us';
    pageDescription:String = 'Who are we, what are we?';
}