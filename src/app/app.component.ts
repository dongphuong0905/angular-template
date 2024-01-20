import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent } from './shared';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  host: {
    class: 'text-foreground block antialiased',
  },
  selector: 'angular-template-root',
  template: `
    <angular-template-header />
    <div class="mx-auto max-w-screen-2xl">
      <router-outlet />
    </div>
  `,
})
export class AppComponent {}
