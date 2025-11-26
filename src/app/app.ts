import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Drawer } from "./features/daisyui-page/components/drawer/drawer";
import { Footer } from "./features/daisyui-page/components/footer/footer";
import { BackToTop } from "./features/daisyui-page/components/back-to-top/back-to-top";
import { ThemeService } from './features/simpsons/services/theme-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Drawer, Footer, BackToTop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('03-ui-componentes-estilos');
  constructor(private themeService: ThemeService) {
    // Aplica el tema guardado al arrancar la app
    this.themeService.applyStoredTheme();
  }
}
