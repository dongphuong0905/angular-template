import { Component, EventEmitter, Output } from '@angular/core';
import { HlmScrollAreaComponent } from '@spartan-ng/ui-scrollarea-helm';
import { SideNavComponent } from './side-nav-coming-soon.component';
import { SideNavHeadingDirective } from './side-nav-heading.directive';
import { SideNavLinkDirective } from './side-nav-link.directive';
import { SideNavLinksComponent } from './side-nav-links.directive';

@Component({
	selector: 'angular-template-side-nav-content',
	standalone: true,
	imports: [
		HlmScrollAreaComponent,
		SideNavLinkDirective,
		SideNavLinksComponent,
		SideNavHeadingDirective,
		SideNavComponent,
	],
	host: {
		class: 'block px-1',
	},
	template: `
		<div class="pb-4">
			<h4 angularTemplateSideNavHeading>Getting Started</h4>
			<angular-template-side-nav-links>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/documentation/introduction">Introduction</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/documentation/cli">CLI</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/documentation/changelog">Changelog</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/documentation/about">About & Credits</a>
			</angular-template-side-nav-links>
		</div>

		<div class="pb-4">
			<h4 angularTemplateSideNavHeading>Stack</h4>
			<angular-template-side-nav-links>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/stack/overview">Overview</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/stack/technologies">Technologies</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/stack/installation">Installation</a>
			</angular-template-side-nav-links>
		</div>

		<div class="pb-4">
			<h4 angularTemplateSideNavHeading>UI</h4>
			<angular-template-side-nav-links>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/documentation/installation">Installation</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/documentation/theming">Theming</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/documentation/dark-mode">Dark mode</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/documentation/typography">Typography</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/documentation/figma">Figma</a>
			</angular-template-side-nav-links>
		</div>

		<div class="pb-4">
			<h4 angularTemplateSideNavHeading>Components</h4>
			<angular-template-side-nav-links>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/accordion">Accordion</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/alert">Alert</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/alert-dialog">Alert Dialog</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/aspect-ratio">Aspect Ratio</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/avatar">Avatar</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/badge">Badge</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/button">Button</a>
				<a disabled angularTemplateSideNavLink="/components/calendar">
					Calendar
					<angular-template-side-nav-cs />
				</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/card">Card</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/checkbox">Checkbox</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/collapsible">Collapsible</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/combobox">Combobox</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/command">Command</a>
				<a angularTemplateSideNavLink="/components/context-menu">Context Menu</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/data-table">Data Table</a>
				<a disabled angularTemplateSideNavLink="/components/picker">
					Date Picker
					<angular-template-side-nav-cs />
				</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/dialog">Dialog</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/dropdown-menu">Dropdown Menu</a>
				<a disabled angularTemplateSideNavLink="/components/form">
					Form
					<angular-template-side-nav-cs />
				</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/hover-card">Hover Card</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/input">Input</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/label">Label</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/menubar">Menubar</a>
				<a disabled angularTemplateSideNavLink="/components/navigation-menu">
					Navigation Menu
					<angular-template-side-nav-cs />
				</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/popover">Popover</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/progress">Progress</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/radio-group">Radio Group</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/scroll-area">Scroll Area</a>
				<a disabled angularTemplateSideNavLink="/components/select">
					Select
					<angular-template-side-nav-cs />
				</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/separator">Separator</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/sheet">Sheet</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/skeleton">Skeleton</a>
				<a disabled angularTemplateSideNavLink="/components/slider">
					Slider
					<angular-template-side-nav-cs />
				</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/switch">Switch</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/table">Table</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/tabs">Tabs</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/textarea">Textarea</a>
				<a disabled angularTemplateSideNavLink="/components/toast">
					Toast
					<angular-template-side-nav-cs />
				</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/toggle">Toggle</a>
				<a (click)="linkClicked.emit()" angularTemplateSideNavLink="/components/tooltip">Tooltip</a>
			</angular-template-side-nav-links>
		</div>
	`,
})
export class SideNavContentComponent {
	@Output()
	linkClicked = new EventEmitter<void>();
}
