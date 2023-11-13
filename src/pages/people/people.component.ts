import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent {
  title = 'PEOPLE';
}
