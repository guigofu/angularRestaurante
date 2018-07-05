import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { WeekComponent } from './components/week/week.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';

import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { FormsModule} from '@angular/forms';

// generalmente se especifican las direcciones en un archivo separado
// en las rutas el orden importa en caso de "conflictos" (como en laravel)
const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path: 'agregar', component: AddPageComponent},
  // Cualquier otro path, siempre se debe declarar al final
  { path: '**', component: NotFoundComponent}

  // variable in route
  // { path: 'menu/:id'}
];

@NgModule({
  // Componentes, Pipes o Directivas que son visibles en el módulo
  declarations: [
    AppComponent, ToolbarComponent, CardComponent, FechaPipe, WeekComponent, ListPageComponent, AddPageComponent, NotFoundComponent,
  ],
  // Importamos módulos. (Servicios, componentes, directivas)
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  // Servicios (Singleton) disponibles en el módulo
  providers: [],
  // Componente que se ejecuta primero
  bootstrap: [AppComponent],

  // Componentes, Pies, Directivas o Servicios que se pueden exportar
  exports: []
})
export class AppModule { }
