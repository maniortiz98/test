import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component'
import { ProductsComponent } from './pages/products/products.component';
import { SearchComponent } from './pages/search/search.component';
import { Error404Component } from './pages/error404/error404.component';
import { CardcolorComponent } from './pages/cardcolor/cardcolor.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'products/:params', component: ProductsComponent },

  {path: 'cardcolor', component: CardcolorComponent },
  {path: 'detalle/:param', component: DetalleComponent },
  
	{path: 'search', component: SearchComponent },
 

	{path: '**', pathMatch:'full', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
