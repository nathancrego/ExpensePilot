import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './Core/navbar/navbar.component';
import { UserListComponent } from './Features/Administration/UserManagement/user-list/user-list.component';
import { AddUserComponent } from './Features/Administration/UserManagement/add-user/add-user.component';
import { EditUserComponent } from './Features/Administration/UserManagement/edit-user/edit-user.component';
import { AddDepartmentComponent } from './Features/Administration/DepartmentManagement/add-department/add-department.component';
import { EditDepartmentComponent } from './Features/Administration/DepartmentManagement/edit-department/edit-department.component';
import { DepartmentListComponent } from './Features/Administration/DepartmentManagement/department-list/department-list.component';
import { AddRolesComponent } from './Features/Administration/UserRoleManagement/add-roles/add-roles.component';
import { RolesListComponent } from './Features/Administration/UserRoleManagement/roles-list/roles-list.component';
import { EditRolesComponent } from './Features/Administration/UserRoleManagement/edit-roles/edit-roles.component';
import { AddUseraccessComponent } from './Features/Administration/UserAccessManagement/add-useraccess/add-useraccess.component';
import { UseraccessListComponent } from './Features/Administration/UserAccessManagement/useraccess-list/useraccess-list.component';
import { EditUseraccessComponent } from './Features/Administration/UserAccessManagement/edit-useraccess/edit-useraccess.component';
import { AddExpensecategoryComponent } from './Features/Administration/ExpenseCategoryManagement/add-expensecategory/add-expensecategory.component';
import { EditExpensecategoryComponent } from './Features/Administration/ExpenseCategoryManagement/edit-expensecategory/edit-expensecategory.component';
import { ExpensecategoryListComponent } from './Features/Administration/ExpenseCategoryManagement/expensecategory-list/expensecategory-list.component';
import { LoginComponent } from './Features/Administration/Authentication/login/login.component';
import { RegisterComponent } from './Features/Administration/Authentication/register/register.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { AddExpenseComponent } from './Features/Expense/add-expense/add-expense.component';
import { EditExpenseComponent } from './Features/Expense/edit-expense/edit-expense.component';
import { ListExpenseComponent } from './Features/Expense/list-expense/list-expense.component';
import { AddExpensestatusComponent } from './Features/Administration/ExpenseStatusManagement/add-expensestatus/add-expensestatus.component';
import { EditExpensestatusComponent } from './Features/Administration/ExpenseStatusManagement/edit-expensestatus/edit-expensestatus.component';
import { ExpensestatusListComponent } from './Features/Administration/ExpenseStatusManagement/expensestatus-list/expensestatus-list.component';
import { AddPolicyComponent } from './Features/Policies/add-policy/add-policy.component';
import { EditPolicyComponent } from './Features/Policies/edit-policy/edit-policy.component';
import { PolicyListComponent } from './Features/Policies/policy-list/policy-list.component';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    AddUserComponent,
    EditUserComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    DepartmentListComponent,
    AddRolesComponent,
    RolesListComponent,
    EditRolesComponent,
    AddUseraccessComponent,
    UseraccessListComponent,
    EditUseraccessComponent,
    AddExpensecategoryComponent,
    EditExpensecategoryComponent,
    ExpensecategoryListComponent,
    LoginComponent,
    RegisterComponent,
    AddExpenseComponent,
    EditExpenseComponent,
    ListExpenseComponent,
    AddExpensestatusComponent,
    EditExpensestatusComponent,
    ExpensestatusListComponent,
    AddPolicyComponent,
    EditPolicyComponent,
    PolicyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule   
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
