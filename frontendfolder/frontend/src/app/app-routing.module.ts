import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditformComponent } from './editform/editform.component';

const routes: Routes = [
  {path:'editform/:_id',component:EditformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
