import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContenteditableDirective } from './directives/contenteditable.directive';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContenteditableDirective, IconComponent],
  exports: [ContenteditableDirective, IconComponent]
})
export class SharedModule {
}
