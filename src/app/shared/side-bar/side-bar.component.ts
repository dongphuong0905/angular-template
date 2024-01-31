import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-template-side-bar',
  standalone: true,
  template: ``,
  styles: [``]
})
export class SideBarComponent{
  @Input()
  isCollapsed: boolean = false;
}