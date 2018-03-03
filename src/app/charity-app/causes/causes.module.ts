import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCommonModule } from '../app-common/app-common.module';
import { CausesComponent } from './components/causes.component';
import { CausesListComponent } from './components/causes-list/causes-list.component';

@NgModule({
    declarations: [
        CausesComponent,
        CausesListComponent],
    imports: [
        CommonModule,
        FormsModule,
        AppCommonModule
    ],
    exports: [
        CausesComponent
    ]
})
export class CausesModule { }