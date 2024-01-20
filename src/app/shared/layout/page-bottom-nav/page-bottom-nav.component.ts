import { Component } from '@angular/core';

@Component({
	selector: 'angular-template-page-bottom-nav',
	standalone: true,
	host: {
		class: 'mt-12 flex flex-row-reverse items-center justify-between',
	},
	template: `
		<ng-content />
	`,
})
export class PageBottomNavComponent {}
