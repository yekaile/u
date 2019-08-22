import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HerosComponent} from './component/heros/heros.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {HeroDetailComponent} from './component/hero-detail/hero-detail.component';

const routes: Routes = [
  {path: 'heros', component: HerosComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
/*
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
*/
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
