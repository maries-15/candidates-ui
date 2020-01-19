import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then(mod => mod.HomeModule)
    },
    {
        path: 'past-trials',
        loadChildren: () => import('./features/past-trials/past-trials.module').then(mod => mod.PastTrialsModule)
    },
    {
        path: 'how-it-works',
        loadChildren: () => import('./features/how-work/how-work.module').then(m => m.HowWorkModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
