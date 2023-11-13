import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {

  pages = [
    {title: 'Main', route: 'main'},
    {title: 'People', route: 'people'},
    {title: 'Films', route: 'films'},
    {title: 'Ships', route: 'ships'},
    {title: 'Transport', route: 'transport'},
    {title: 'Planets', route: 'planets'},
    {title: 'Nations', route: 'nations'}
  ]

}
