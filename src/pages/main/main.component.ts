import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  title = 'STAR WARS';
}
