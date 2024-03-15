import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirect to home page
  { path: 'child1', loadChildren: () => import('./child1/child1.module').then(m => m.Child1Module) },
  { path: 'child2', loadChildren: () => import('./child2/child2.module').then(m => m.Child2Module) },
  { path: 'child3', loadChildren: () => import('./child3/child3.module').then(m => m.Child3Module) },
  { path: 'test', component: TestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
