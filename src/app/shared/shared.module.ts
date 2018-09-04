import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContenteditableDirective } from './directives/contenteditable.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContenteditableDirective],
  exports: [ContenteditableDirective]
})
export class SharedModule {
}
