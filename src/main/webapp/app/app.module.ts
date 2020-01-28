import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SidebarSharedModule } from 'app/shared/shared.module';
import { SidebarCoreModule } from 'app/core/core.module';
import { SidebarAppRoutingModule } from './app-routing.module';
import { SidebarHomeModule } from './home/home.module';
import { SidebarEntityModule } from './entities/entity.module';
import { FlexLayoutModule } from '@angular/flex-layout';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { JhMaterialModule } from 'app/shared/jh-material.module';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { MapsComponent } from './layouts/maps/maps.component';
import { FilterComponent } from './layouts/filter/filter.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SidebarSharedModule,
    SidebarCoreModule,
    SidebarHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SidebarEntityModule,
    SidebarAppRoutingModule,
    BrowserAnimationsModule,
    JhMaterialModule
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent,
    SidenavComponent,
    MapsComponent,
    FilterComponent
  ],
  bootstrap: [MainComponent]
})
export class SidebarAppModule {}
