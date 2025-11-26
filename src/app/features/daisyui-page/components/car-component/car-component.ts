import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-car-component',
  imports: [],
  templateUrl: './car-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarComponent { }
