import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule,Routes } from '@angular/router';
import { ChangepwdComponent } from './changepwd/changepwd.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'changepwd', component: ChangepwdComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    AdminComponent,
    ChangepwdComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }