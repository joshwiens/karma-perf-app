import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
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
