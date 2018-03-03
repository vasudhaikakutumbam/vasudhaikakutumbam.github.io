import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCommonModule } from '../app-common/app-common.module';
import { AgmCoreModule } from '@agm/core';

import { ContactComponent } from './components/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

@NgModule({
    declarations: [
        ContactComponent,
        ContactFormComponent,
        ContactDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppCommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCXOxyfrvObC1JOXqzKm8H_wovEOTY7tCA'
        })
    ],
    exports: [
        ContactComponent
    ]
})
export class ContactModule { }