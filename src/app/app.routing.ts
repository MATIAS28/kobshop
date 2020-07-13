import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/products/products.component';

  const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'articulos/:name', component: ProductComponent},
    {path: 'articulo/:id', component: ProductComponent},
    {path: 'articulos/remeras', component: ProductComponent},
    {path: '**', component: HomeComponent}
  ];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
