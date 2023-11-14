import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="header card">
      <h2>STAR WARS /// {{title}}</h2>
    </header>
  `,
  styles: [`
    .header {
      margin: 0 10px;
    }

    h2 {
      font-size: 22px;
      font-weight: 500;
    }
  `]
})
export class HeaderComponent {

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.title = document.title;
        this.cdr.detectChanges();
    }
    })
  }

  title = '';

}
