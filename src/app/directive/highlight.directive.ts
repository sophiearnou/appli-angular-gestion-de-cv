import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') bg = 'red';

  constructor() {}
  @HostListener('mouseenter') mousseenter() {
    this.bg = 'yellow';
  }
  @HostListener('mouseleave') mousseleave() {
    this.bg = 'red';
  }
}
