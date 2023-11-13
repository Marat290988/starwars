import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="header card">
      <h2>STAR WARS /// HEADER</h2>
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

}
