import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './charity-app/home/components/home.component';
import { CausesComponent } from './charity-app/causes/components/causes.component';
import { ContactComponent } from './charity-app/contact/components/contact.component';
import { AboutComponent } from './charity-app/about/components/about.component';
import { LoginComponent } from './charity-app/home/components/login/login.component';
import { SignupComponent } from './charity-app/home/components/signup/signup.component';
import { PasswordResetComponent } from './charity-app/home/components/password-reset/password-reset.component';
import { PersonalComponent } from './charity-app/home/components/signup/personal/personal.component';
import { WorkComponent } from './charity-app/home/components/signup/work/work.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'causes', component: CausesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    /*{ path: 'login', component: LoginComponent },
    { path: 'password_reset', component: PasswordResetComponent },
    { path: 'join', component: SignupComponent }*/
]

export const CHARITY_APP_ROUTES = RouterModule.forRoot(ROUTES)