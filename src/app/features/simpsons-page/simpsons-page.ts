import { Component, effect, signal } from '@angular/core';
import { map } from 'rxjs';
import { SimpsonsService } from '../simpsons/services/simpsons-service';
import { PaginationService } from '../simpsons/services/paginacion-service';
import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from '../daisyui-page/components/pagination-component/pagination-component';
import { HeroSimpsons } from "../daisyui-page/components/hero-simpsons/hero-simpsons";
import { Breadcrumbs } from "../daisyui-page/components/breadcrumbs/breadcrumbs";
import { BackToTop } from "../daisyui-page/components/back-to-top/back-to-top";

@Component({
  selector: 'app-simpsons-page',
  imports: [RouterModule, PaginationComponent, HeroSimpsons, Breadcrumbs, BackToTop],
  templateUrl: './simpsons-page.html',
  styleUrl: './simpsons-page.css',
})
export class SimpsonsPageComponent {
  private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService);

  simpsonsResource = toSignal(
    this.simpsonsService.getCharacters(this.paginationService.currentPage()).pipe(
      map(res => res)
    ),
    { initialValue: null }
  );

    totalPages = signal(0);

  constructor() {
    // Effect que actualiza el número de páginas cuando hay datos válidos
    effect(() => {
      const data = this.simpsonsResource(); // <-- llamar al signal
      if (data) {
        this.totalPages.set(data.pages ?? 0);
      } else {
        this.totalPages.set(0);
      }
    });
  }
}