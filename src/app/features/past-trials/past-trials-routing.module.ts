import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastTrialsComponent } from './past-trials.component';

const routes: Routes = [{ path: '', component: PastTrialsComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PastTrialsRoutingModule { }
