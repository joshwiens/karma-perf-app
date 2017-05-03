import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'all-inline', loadChildren: './all-inline/all-inline.module#AllInlineModule' },
  { path: 'inline-style', loadChildren: './inline-style/inline-style.module#InlineStyleModule' },
  { path: 'inline-template', loadChildren: './inline-template/inline-template.module#InlineTemplateModule' },
  { path: 'lazy-module', loadChildren: './lazy-module/lazy-module.module#LazyModuleModule' },
  { path: 'standard-component', loadChildren: './standard-component/standard-component.module#StandardComponentModule' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true }),
  ],
  exports: [ RouterModule ],

})
export class AppRoutingModule { }
