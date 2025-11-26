import { Injectable } from '@angular/core';
import { App } from '../../../app';

export type AppTheme='light' | 'dark' | 'lemonade' | string;
const THEME_KEY='app-theme';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {

  readonly defaultTheme: AppTheme= 'lemonade';
  constructor() { 
    this.applyStoredTheme();
  }

  private safeLocalStorageSet(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      
      console.warn('No se pudo escribir en localStorage:', e);
    }
  }

  private safeLocalStorageGet(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn('No se pudo leer localStorage:', e);
      return null;
    }
  }

  setTheme(theme: AppTheme): void {
    this.safeLocalStorageSet(THEME_KEY, theme);
    this.applyTheme(theme);
  }

  getTheme(): AppTheme {
    const stored = this.safeLocalStorageGet(THEME_KEY);
    return (stored ?? this.defaultTheme) as AppTheme;
  }

  applyTheme(theme: AppTheme): void {
    try {
      const html = document.documentElement;
      if (html) {
        html.setAttribute('data-theme', theme);
      }
    } catch (e) {
      console.warn('No se pudo aplicar el tema:', e);
    }
  }

   applyStoredTheme(): void {
    const t = this.getTheme();
    this.applyTheme(t);
  }
}
