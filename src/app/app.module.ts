import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { HeaderMobileComponent } from './modules/header-mobile/header-mobile.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { Error404Component } from './pages/error404/error404.component';
import { SearchComponent } from './pages/search/search.component';
import { InicioComponent } from './pages/home/inicio/inicio.component';
import { PokeComponent } from './pages/products/poke/poke.component';
import { CardcolorComponent } from './pages/cardcolor/cardcolor.component';
import { CardComponent } from './pages/cardcolor/card/card.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { InfoComponent } from './pages/detalle/info/info.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMobileComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    Error404Component,
    SearchComponent,
    InicioComponent,
    PokeComponent,
    CardcolorComponent,
    CardComponent,
    DetalleComponent,
    InfoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
