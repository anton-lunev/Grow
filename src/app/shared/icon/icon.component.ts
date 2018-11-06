import {Component, HostBinding, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'svg[icon]',
  template: `
    <svg:use [attr.xlink:href]="'/assets/icons/main.svg#' + icon"></svg:use>
  `
})
export class IconComponent {
  @Input() icon: string;
  @HostBinding('attr.width') width = '1em';
  @HostBinding('attr.height') height = '1em';
}
