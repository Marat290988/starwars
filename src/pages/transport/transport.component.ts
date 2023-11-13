import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransportComponent {
  title = 'SHIPS';
}
