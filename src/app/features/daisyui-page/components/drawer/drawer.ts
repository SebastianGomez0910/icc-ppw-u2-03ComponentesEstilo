import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher";

@Component({
  selector: 'app-drawer',
  imports: [RouterLink, RouterLinkActive, ThemeSwitcherComponent,RouterModule, ThemeSwitcherComponent],
  templateUrl: './drawer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Drawer { }
