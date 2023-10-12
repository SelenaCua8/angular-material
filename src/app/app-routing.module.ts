import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  { path: 'Inicio', component: DummyComponent},
  { path: 'Nosotros', component: DummyComponent},
  { path: 'Productos', component: DummyComponent},
  { path: 'Contacto', component: DummyComponent},
  { path: 'Ayuda', component: DummyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
