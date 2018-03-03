import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { HeaderComponent } from "./components/header/header.component";
import { HeaderContactComponent } from "./components/header/header-contact.component";
import { HeaderMenuComponent } from "./components/header/header-menu.component";
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ModalInfoComponent } from './components/modal-info/modal-info.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HeaderContactComponent,
        HeaderMenuComponent,
        PageHeaderComponent,
        ModalInfoComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        BootstrapModalModule
    ],
    entryComponents: [
        ModalInfoComponent
    ],
    exports: [
        HeaderComponent,
        HeaderContactComponent,
        HeaderMenuComponent,
        PageHeaderComponent,
        ModalInfoComponent,
        FooterComponent
    ]
})
export class AppCommonModule { }