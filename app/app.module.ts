import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';

import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlockHeadingComponent } from './block-heading/block-heading.component';
import { DashboardManagerService } from './managers/dashboard-manager.service';
import { StockQuantityManagerService } from './managers/stock-quantity-manager.service';
import { MainManagerService } from './managers/main-manager.service';
import { SectionManagerService } from './managers/section-manager.service';
import { StocktakeManagerService } from './managers/stocktake-manager.service';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    BlockHeadingComponent
  ],
  providers: [
    DashboardManagerService,
    StockQuantityManagerService,
    MainManagerService,
    SectionManagerService,
    StocktakeManagerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
