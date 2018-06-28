import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { WeekComponent } from './components/week/week.component';

@NgModule({
  // Componentes, Pipes o Directivas que son visibles en el módulo
  declarations: [
    AppComponent, ToolbarComponent, CardComponent, FechaPipe, WeekComponent,
  ],
  // Importamos módulos. (Servicios, componentes, directivas)
  imports: [
    BrowserModule
  ],
  // Servicios (Singleton) disponibles en el módulo
  providers: [],
  // Componente que se ejecuta primero
  bootstrap: [AppComponent],

  // Componentes, Pies, Directivas o Servicios que se pueden exportar
  exports: []
})
export class AppModule { }
