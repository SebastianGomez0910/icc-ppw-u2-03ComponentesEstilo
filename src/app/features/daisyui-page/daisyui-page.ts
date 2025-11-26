import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Drawer } from "./components/drawer/drawer";
import { ɵEmptyOutletComponent } from "@angular/router";
import { Code } from "./components/code/code";
import { CarComponent } from "./components/car-component/car-component";
import { CardResponsive } from "./components/card-responsive/card-responsive";
import { Footer } from "./components/footer/footer";
import { TablaComponente } from './components/tabla-componente/tabla-componente';

@Component({
  selector: 'app-daisyui-page',
  standalone:true,
  imports: [CommonModule, Code, TablaComponente, CarComponent, CardResponsive],
  templateUrl: './daisyui-page.html',
  styleUrl: './daisyui-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaisyuiPage {

}
