import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './Features/Administration/UserManagement/add-user/add-user.component';
import { UserListComponent } from './Features/Administration/UserManagement/user-list/user-list.component';
import { EditUserComponent } from './Features/Administration/UserManagement/edit-user/edit-user.component';
import { AddDepartmentComponent } from './Features/Administration/DepartmentManagement/add-department/add-department.component';
import { DepartmentListComponent } from './Features/Administration/DepartmentManagement/department-list/department-list.component';
import { EditDepartmentComponent } from './Features/Administration/DepartmentManagement/edit-department/edit-department.component';
import { AddRolesComponent } from './Features/Administration/UserRoleManagement/add-roles/add-roles.component';
import { RolesListComponent } from './Features/Administration/UserRoleManagement/roles-list/roles-list.component';
import { EditRolesComponent } from './Features/Administration/UserRoleManagement/edit-roles/edit-roles.component';
import { UseraccessListComponent } from './Features/Administration/UserAccessManagement/useraccess-list/useraccess-list.component';
import { AddUseraccessComponent } from './Features/Administration/UserAccessManagement/add-useraccess/add-useraccess.component';
import { EditUseraccessComponent } from './Features/Administration/UserAccessManagement/edit-useraccess/edit-useraccess.component';
import { ExpensecategoryListComponent } from './Features/Administration/ExpenseCategoryManagement/expensecategory-list/expensecategory-list.component';
import { AddExpensecategoryComponent } from './Features/Administration/ExpenseCategoryManagement/add-expensecategory/add-expensecategory.component';
import { EditExpensecategoryComponent } from './Features/Administration/ExpenseCategoryManagement/edit-expensecategory/edit-expensecategory.component';
import { AddExpenseComponent } from './Features/Expense/add-expense/add-expense.component';
import { ListExpenseComponent } from './Features/Expense/list-expense/list-expense.component';
import { EditExpenseComponent } from './Features/Expense/edit-expense/edit-expense.component';
import { ExpensestatusListComponent } from './Features/Administration/ExpenseStatusManagement/expensestatus-list/expensestatus-list.component';
import { AddExpensestatusComponent } from './Features/Administration/ExpenseStatusManagement/add-expensestatus/add-expensestatus.component';
import { EditExpensestatusComponent } from './Features/Administration/ExpenseStatusManagement/edit-expensestatus/edit-expensestatus.component';

const routes: Routes = [{
  path:'admin/users/add',
  component: AddUserComponent
},
{
  path:'admin/users',
  component: UserListComponent
},
{
  path:'admin/users/:id',
  component: EditUserComponent
},
{
  path:'admin/departments/add',
  component: AddDepartmentComponent
},
{
  path:'admin/departments',
  component: DepartmentListComponent
},
{
  path:'admin/departments/:id',
  component: EditDepartmentComponent
},
{
  path:'admin/roles/add',
  component: AddRolesComponent
},
{
  path:'admin/roles',
  component: RolesListComponent
},
{
  path:'admin/roles/:id',
  component: EditRolesComponent
},
{
  path:'admin/useraccess',
  component:UseraccessListComponent
},
{
  path:'admin/useraccess/add',
  component:AddUseraccessComponent
},
{
  path:'admin/useraccess/:id',
  component:EditUseraccessComponent
},
{
  path:'admin/expensecategory',
  component:ExpensecategoryListComponent
},
{
  path:'admin/expensecategory/add',
  component:AddExpensecategoryComponent
},
{
  path:'admin/expensecategory/:id',
  component:EditExpensecategoryComponent
},
{
  path:'admin/expensestatus',
  component:ExpensestatusListComponent
},
{
  path:'admin/expensestatus/add',
  component:AddExpensestatusComponent
},
{
  path:'admin/expensestatus/:id',
  component:EditExpensestatusComponent
},
{
  path:'expense/add',
  component:AddExpenseComponent
},
{
  path:'expense',
  component:ListExpenseComponent
},
{
  path:'expense/:id',
  component:EditExpenseComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
