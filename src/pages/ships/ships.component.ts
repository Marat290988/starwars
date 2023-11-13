import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipsComponent {
  title = 'SHIPS';
}
