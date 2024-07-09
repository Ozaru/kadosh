import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'Angular_Projeto';

    ngOnInit(): void {
        AOS.init();
        window.addEventListener('load', AOS.refresh);
  }
}
