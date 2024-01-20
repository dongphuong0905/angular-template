import { Component } from '@angular/core';

@Component({
	selector: 'angular-template-side-nav-links',
	standalone: true,
	host: {
		tabindex: '-1',
		class: 'grid grid-flow-row auto-rows-max',
	},
	template: '<ng-content/>',
})
export class SideNavLinksComponent {}
