import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { WelcomeComponent } from './welcome/welcome.component';
const routes: Routes = [
  {path:'app-general-information',component:GeneralInformationComponent} ,
  {path:'',component:WelcomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
