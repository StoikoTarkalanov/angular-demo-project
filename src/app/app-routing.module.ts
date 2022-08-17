import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [{
  path: '',
  component: PaginationComponent,
},
{
  path: 'edit/:id',
  component: EditComponent
},
{
  path: '*',
  component: AppComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
