import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';



const appRoutes: Routes = [
  // { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent , pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
