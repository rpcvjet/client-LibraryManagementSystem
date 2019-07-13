import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'login', component: LoginComponent },
  {
    path: 'member',
    loadChildren: './membershipsection/membership.module#MemberShipModule'
  },
  {
    path: 'employees',
    loadChildren:
      './employee-section/employee-section.module#EmployeeSectionModule'
  },
  {
    path: 'books',
    loadChildren: './booksfeature/books.module#BooksModule'
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
