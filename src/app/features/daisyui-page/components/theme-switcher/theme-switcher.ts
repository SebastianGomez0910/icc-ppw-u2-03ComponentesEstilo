import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal, signal, WritableSignal } from '@angular/core';
import { AppTheme, ThemeService } from '../../../simpsons/services/theme-service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './theme-switcher.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {
  // Temas disponibles
  themes:AppTheme[]= ['light', 'dark', 'lemonade'];
  current!: WritableSignal<AppTheme>;

  //current!: Signal<AppTheme>;
  // Tema actual reactivo
  //currentTheme = signal<string>(this.getCurrentTheme());
  //current = signal<AppTheme>(this.themeService.getTheme());
  // Obtiene el tema actual desde el atributo HTML
  //private getCurrentTheme(): string {
    //return document.documentElement.getAttribute('data-theme') ?? 'light';
  //}

  // Cambia el tema y actualiza el atributo global
  //setTheme(theme: string): void {
    //document.documentElement.setAttribute('data-theme', theme);
    //this.currentTheme.set(theme);
  //}

  constructor(private themeService: ThemeService) {
    this.current = signal<AppTheme>(this.themeService.getTheme());
  }

  onChange(newTheme: AppTheme) {
    this.current.set(newTheme);
    this.themeService.setTheme(newTheme); 
  }

  onSelectChange(e: Event) {
  const value = (e.target as HTMLSelectElement).value as AppTheme;
  this.onChange(value);
}
}