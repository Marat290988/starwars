import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetsComponent {
  title = 'Planets';
}
