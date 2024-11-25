import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/shared/layout/layout.component';
import { RegisterComponent } from './pages/view/register/register.component';
import { LoginComponent } from './pages/view/login/login.component';
import { DashboardComponent } from './pages/view/dashboard/dashboard.component';
<<<<<<< HEAD
=======
import { ContentComponent } from './pages/view/content/content.component';
>>>>>>> master

const routes: Routes = [
  {path:'', component:LayoutComponent,
    children:[{
      path:'', redirectTo:'register', pathMatch: 'full'
    },
      {path:'register', component: RegisterComponent},
      {path:'login', component: LoginComponent},    
<<<<<<< HEAD
      {path:'home', component: DashboardComponent}
=======
      {path:'home', component: ContentComponent},
      {path:'dashboard', component: DashboardComponent}
>>>>>>> master
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
