import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, CanActivate } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {HutService } from './service/hut.service';

import { AuthService } from './service/auth.service';
import { ValidateService } from './service/validate.service';
import { AuthGuard } from './guards/auth.guard';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AdsenseModule } from 'ng2-adsense';


import { AppComponent } from './app.component';
import { AddhutComponent } from './components/addhut/addhut.component';
import { AlluserComponent } from './components/alluser/alluser.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HutdetailComponent } from './components/hutdetail/hutdetail.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MyhutsComponent } from './components/myhuts/myhuts.component';
import { NavComponent } from './components/nav/nav.component';
import { HutUpdateComponent } from './components/hut-update/hut-update.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes : Routes = [
  {path:'', component: HomeComponent},
  {path:'SignUp', component: SignUpComponent},
  {path:'SignIn', component:SignInComponent},
  {path:'dashboard', component: DashboardComponent ,canActivate:[AuthGuard]},//canActivate:[AuthGuard]
  // {path:'profile', component: ProfileComponent},//,canActivate:[AuthGuard]
{path:'addhuts', component: AddhutComponent ,canActivate:[AuthGuard]},
{path:'profile', component: ProfileComponent ,canActivate:[AuthGuard]},
{path:'alluser', component: AlluserComponent },
{path:'myhuts', component: MyhutsComponent ,canActivate:[AuthGuard]},

{path:'update/:id', component: HutUpdateComponent ,canActivate:[AuthGuard]},

{path:'hutdetail/:id', component: HutdetailComponent ,canActivate:[AuthGuard]}

]

@NgModule({
  declarations: [
    AppComponent,
    AddhutComponent,
    AlluserComponent,
    DashboardComponent,
    HomeComponent,
    HutdetailComponent,
    SignInComponent,
    SignUpComponent,
    MyhutsComponent,
    NavComponent,
    HutUpdateComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
        RouterModule.forRoot(appRoutes),
FlashMessagesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAOWMIcTqIC1hHbdjRpRi1Tr1un_BomQss',
      
    }),
         AdsenseModule.forRoot({
        adClient: 'ca-pub-1895109071827119', //replace with your client from google adsense
        adSlot:6278796456//replace with your slot from google adsense
    }),
    HttpModule,
  FormsModule,
    // Including the ReactiveFormsModule in our application
    ReactiveFormsModule,
  ],
  providers: [ValidateService,AuthService,HutService,AuthGuard],//AuthGuard
  bootstrap: [AppComponent]
})
export class AppModule { }
