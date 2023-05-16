import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from 'src/users/component/finance/finance.component';
import { HomeComponent } from 'src/users/component/home/home.component';
import { LoginComponent } from 'src/users/component/login/login.component';

const routes: Routes = [
  {path: ' ' , component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'finance', component:FinanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
