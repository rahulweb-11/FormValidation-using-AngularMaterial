import { UserRegisterService } from './service/user-register.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import{MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './User-Registration/user-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './User-List/user-list/user-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'signup', component: UserRegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserListComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
