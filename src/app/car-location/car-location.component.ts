import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarsDisplay} from '../carsdisplay';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-car-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="CarsDisplay.photo"
        alt="Exterior photo of {{ CarsDisplay.model }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ CarsDisplay.make }}, {{ CarsDisplay.model }}</h2>
      <p class="listing-location">{{ CarsDisplay.location }}</p>
      <a [routerLink]="['/details', CarsDisplay.id]">Learn More</a>
    </section>
  `,
  styleUrl: './car-location.component.css'
})
export class CarLocationComponent {
  @Input() CarsDisplay!: CarsDisplay;
}
