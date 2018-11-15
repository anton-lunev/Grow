import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContenteditableDirective } from './directives/contendeditable/contenteditable.directive';
import { IconComponent } from './icon/icon.component';
import { AutofocusDirective } from './directives/autofocus/autofocus.directive';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContenteditableDirective, IconComponent, AutofocusDirective, CheckboxComponent],
  exports: [ContenteditableDirective, IconComponent, AutofocusDirective]
})
export class SharedModule {}
