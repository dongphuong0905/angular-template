import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { radixGithubLogo, radixTwitterLogo } from '@ng-icons/radix-icons';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { HeaderThemePickerComponent } from './header-theme-picker.component';
import { HeaderMobileNavComponent } from './header-mobile-nav.component';
import { HeaderDarkModeComponent } from './header-dark-mode.component';
import { AngularTemplateLogoComponent } from '../app-logo.component';

@Component({
	selector: 'angular-template-header',
	standalone: true,
	imports: [
		HlmButtonDirective,
		RouterLink,
		HlmIconComponent,
		HeaderThemePickerComponent,
		HeaderMobileNavComponent,
		HeaderDarkModeComponent,
		AngularTemplateLogoComponent
	],
	providers: [provideIcons({ radixTwitterLogo, radixGithubLogo })],
	host: {
		class: 'block sticky w-full top-0 z-40 bg-background/95 bg-blur-lg p-2 sm:px-4 border-b border-border',
	},
	template: `
		<div class="mx-auto flex w-full max-w-screen-xl items-center justify-between">
			<nav class="flex items-center">
				<a hlmBtn variant="ghost" class="mr-3 hidden p-1.5 sm:flex" routerLink="/">
					<angular-template-logo class="w-14" />
					<span class="sr-only">spartan</span>
				</a>

				<angular-template-mobile-nav class="sm:hidden" />

				<div class="hidden sm:flex sm:space-x-2">
					<a angularNavLink="/documentation">Documentation</a>
					<a angularNavLink="/stack">Stack</a>
					<a angularNavLink="/components">Components</a>
					<a angularNavLink="/examples">Examples</a>
				</div>
			</nav>

			<div class="flex space-x-2">
				<a href="https://twitter.com/goetzrobin" target="_blank" size="sm" variant="ghost" hlmBtn>
					<span class="sr-only">Twitter</span>
					<hlm-icon name="radixTwitterLogo" size="sm" />
				</a>
				<a href="https://github.com/goetzrobin/spartan" target="_blank" size="sm" variant="ghost" hlmBtn>
					<span class="sr-only">Github</span>
					<hlm-icon name="radixGithubLogo" size="sm" />
				</a>
				<angular-template-theme-picker />
				<angular-template-dark-mode />
			</div>
		</div>
	`,
})
export class HeaderComponent {}
