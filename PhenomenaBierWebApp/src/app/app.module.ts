
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { VendasComponent } from './ui/vendas/vendas.component';
import { HomeComponent } from './ui/home/home.component';
import { CaixaComponent } from './ui/caixa/caixa.component';
import { EstoqueComponent } from './ui/estoque/estoque.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'vendas', component: VendasComponent },
  { path: 'estoque', component: EstoqueComponent },
  {path: 'caixa', component: CaixaComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
