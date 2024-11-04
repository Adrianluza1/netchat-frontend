// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    CapitalizePipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    CapitalizePipe
  ]
})
export class SharedModule { }
