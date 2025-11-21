import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignalBoxComponent } from '../signal-box.component/signal-box.component';

@Component({
  selector: 'app-estilos-page',
  standalone: true,
  imports: [SignalBoxComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './estilos-page.html',
  styleUrl: './estilos-page.css',
})
export class EstilosPage {

}
