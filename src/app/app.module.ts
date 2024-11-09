import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms'

import { LayoutComponent } from './pages/shared/layout/layout.component';
import { RegisterComponent } from './pages/view/register/register.component';
import { LoginComponent } from './pages/view/login/login.component';
import { DashboardComponent } from './pages/view/dashboard/dashboard.component';
import { ContentComponent } from './pages/view/content/content.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
