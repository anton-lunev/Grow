import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContenteditableDirective } from './directives/contenteditable.directive';
import { IconComponent } from './icon/icon.component';
import { AutofocusDirective } from './directives/autofocus/autofocus.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ContenteditableDirective, IconComponent, AutofocusDirective],
  exports: [ContenteditableDirective, IconComponent, AutofocusDirective]
})
export class SharedModule {}
