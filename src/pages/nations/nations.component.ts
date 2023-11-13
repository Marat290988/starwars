import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-nations',
  templateUrl: './nations.component.html',
  styleUrls: ['./nations.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NationsComponent {
  title = 'Nations';
}
