import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';

import { AboutComponent } from './components/about.component';
import { MissionComponent } from './components/mission/mission.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { DetailComponent } from './components/detail/detail.component';
import { VissionComponent } from './components/vission/vission.component';
import { GoalComponent } from './components/goal/goal.component';

@NgModule({
    declarations: [
        AboutComponent,
        MissionComponent,
        TeamMemberComponent,
        DetailComponent,
        VissionComponent,
        GoalComponent
    ],
    imports: [
        CommonModule,
        AppCommonModule
    ],
    exports: [
        VissionComponent,
        GoalComponent,
        MissionComponent,
        AboutComponent
    ]
})
export class AboutModule { }