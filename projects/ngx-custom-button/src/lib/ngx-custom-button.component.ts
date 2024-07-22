import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-button',
  standalone: true,
  imports: [],
  template: `<button class="button" [class.autumn]="color === 'autumn'" [class.summer]="color === 'summer'" [class.spring]="color === 'spring'">{{label}}</button>`,
  styleUrls: ['../lib/theme/custom-button.component.css']
})
export class NgxCustomButtonComponent {
  @Input() label: string = 'Click me!';
  @Input() color: 'autumn' | 'summer' | 'spring' = 'summer';
}


