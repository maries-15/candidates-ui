import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowWorkComponent } from './how-work.component';

const routes: Routes = [{ path: '', component: HowWorkComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HowWorkRoutingModule { }
