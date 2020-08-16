import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackendApiService } from './services/backend-api.service';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service 
import { AlertsModule } from 'angular-alert-module';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { HomePageComponent } from './home-page/home-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { MainPageComponent } from './main-page/main-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomePageComponent }
//    children: [
//        { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
//        { path: 'Dashboard', component: DashboardComponent },
//        { path: 'Trash', component: TrashComponent },
//        { path: 'Archieve', component: ArchieveComponent },
//        { path: 'Label/:id', component: LabeldashboardComponent }
//     ],
// }
];


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomePageComponent,
    MainPageComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    FlexLayoutModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AlertsModule.forRoot(),
    NotificationModule
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
