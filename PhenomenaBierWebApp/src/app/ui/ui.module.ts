import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VendasComponent } from './vendas/vendas.component';
import { HomeComponent } from './home/home.component';
import { CaixaComponent } from './caixa/caixa.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ProducaoComponent } from './producao/producao.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from '../auth/authguard.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'vendas', component: VendasComponent, canActivate: [AuthGuard]  },
  { path: 'estoque', component: EstoqueComponent, canActivate: [AuthGuard]  },
  { path: 'caixa', component: CaixaComponent, canActivate: [AuthGuard] },
  { path: 'procucao', component: ProducaoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    HeaderComponent,
    LayoutComponent,
    VendasComponent,
    HomeComponent,
    EstoqueComponent,
    FooterComponent,
    ProducaoComponent,
    CaixaComponent,
    LoginComponent
  ],
  exports: [HeaderComponent, LayoutComponent, VendasComponent, HomeComponent, EstoqueComponent]
})
export class UiModule { }
