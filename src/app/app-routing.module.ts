import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { MainUserComponent } from './components/users/main-user/main-user.component';
import { StoreUserComponent } from './components/users/store-user/store-user.component';
import { ViewUserComponent } from './components/users/view-user/view-user.component';

// const routes: Routes = [
//   { path: '', component: LoginComponent },
//   {
//     path: 'dashboard', component: MainComponent, children: [
//       { path: '', component: DashboardComponent },
//       {
//         path: 'users', component: MainUserComponent,
//         children: [
//           { path: '', component: ViewUserComponent },
//           { path: 'store', component: StoreUserComponent },
//           { path: ':id', component: StoreUserComponent },
//         ]
//       },
//       {
//         path: 'profile', component: MainProfileComponent,
//         children: [
//           { path: '', component: ViewProfileComponent },
//           // { path: 'store', component: StoreUserComponent },
//           // { path: ':id', component: StoreUserComponent },
//         ]

//       },
//       {
//         path: 'product', component: MainProductComponent,
//         children: [
//           { path: '', component: ViewProductComponent },
//           { path: 'store', component: StoreProductComponent },
//           { path: ':id', component: StoreProductComponent },
//         ]
//       },
//       {
//         path: 'category', component: MainCategoryComponent, children: [
//           { path: "", component: ViewCategoryComponent },
//           { path: "store", component: StoreCategoryComponent },
//           { path: ":id", component: StoreCategoryComponent }
//         ]
//       },
//       { path: 'settings', component: SettingsComponent },
//       { path: 'logs', component: ActiveLogComponent },
//     ]
//   },
//   { path: '**', redirectTo: '', pathMatch: 'full' }
// ];

const routes: Routes = [
  { path: '', component: LoginComponent },//login component
  {
    path: 'dashboard', component: MainComponent, children: [
      { path: '', component: DashboardComponent },
      {
        path: 'users', component: MainUserComponent, children: [
          { path: '', component: ViewUserComponent },
        ]

      }

    ]
  },
  { path: 'main', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }