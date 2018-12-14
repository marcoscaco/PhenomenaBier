import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VendasComponent } from './vendas/vendas.component';
import { HomeComponent } from './home/home.component';
import { CaixaComponent } from './caixa/caixa.component';
import { EstoqueComponent } from './estoque/estoque.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, VendasComponent, HomeComponent, CaixaComponent, EstoqueComponent],
  exports: [LayoutComponent, VendasComponent, HomeComponent, EstoqueComponent]
})
export class UiModule { }
