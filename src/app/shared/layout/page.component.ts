import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PageNavOutletComponent } from './page-nav/page-nav-outlet.component';
import { ContainerDirective } from './container.directive';
import { MainSectionDirective } from './main-section.directive';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';

@Component({
	selector: 'angular-template-page',
	standalone: true,
	imports: [RouterOutlet, SideNavComponent, BreadcrumbsComponent, MainSectionDirective, PageNavOutletComponent],
	hostDirectives: [ContainerDirective],
	template: `
		<angular-template-side-nav />
		<main class="sticky top-0 overflow-hidden py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[minmax(0,1fr)_280px]">
			<div class="px-2">
				<angular-template-breadcrumbs />
				<router-outlet />
			</div>
			<angular-template-page-nav-outlet />
		</main>
	`,
})
export class PageComponent {}
