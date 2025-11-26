import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-box',
  imports: [CommonModule],
  templateUrl: './signal-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalBoxComponent { 
  valor = signal<number>(0);
  progreso = signal<number>(0);

  cambiarValor(event: Event) {
    const input = event.target as HTMLInputElement;
    const nuevoValor = Number(input.value);
    this.valor.set(nuevoValor);
  }

  actualizarProgreso(event: Event) {
    const input = event.target as HTMLInputElement;
    const nuevoValor = Number(input.value);
    
    // Actualizamos la señal
    this.progreso.set(nuevoValor);
  }
}
