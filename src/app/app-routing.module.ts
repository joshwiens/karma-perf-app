import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AllInlineComponent } from './all-inline/all-inline.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { StandardComponentComponent } from './standard-component/standard-component.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'all-inline', component: AllInlineComponent, pathMatch: 'full' },
  { path: 'inline-style', component: InlineStyleComponent, pathMatch: 'full' },
  { path: 'inline-template', component: InlineTemplateComponent, pathMatch: 'full' },
  { path: 'standard-component', component: StandardComponentComponent, pathMatch: 'full' },
  { path: 'lazy-module', loadChildren: './lazy-module/lazy-module.module#LazyModuleModule' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true }),
  ],
  exports: [ RouterModule ],

})
export class AppRoutingModule { }
