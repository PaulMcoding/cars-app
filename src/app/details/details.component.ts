import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {CarService} from '../cars.service';
import {CarsDisplay} from '../carsdisplay';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="CarsDisplay?.photo"
        alt="Exterior photo of {{ CarsDisplay?.model }}"
        crossorigin
      />
      <div id="back">
      <section class="listing-description">
        <h2 class="listing-heading">{{ CarsDisplay?.make }} {{ CarsDisplay?.model }}</h2>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this Car</h2>
        <ul>
          <li>Location of Car: {{ CarsDisplay?.location }}</li>
          <li>Body Type: {{ CarsDisplay?.doors }} door {{ CarsDisplay?.bodytype }}</li>
          <li>Is this car for sale: {{ CarsDisplay?.forsale }}</li>
        </ul>
      </section>
          </div>
    </article>
  `,
  styleUrl: './details.component.css'
})

export class DetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  CarService = inject(CarService);
  CarsDisplay: CarsDisplay | undefined;
  CarsDisplayID: number;

  constructor() {
    // Get the Car ID from the route parameters
    this.CarsDisplayID = Number(this.route.snapshot.params['id']);
    console.log(this.CarsDisplayID)
  }

  async ngOnInit() {
    // Fetch car details asynchronously
    try {
      this.CarsDisplay = await this.CarService.getCarsDisplayById(this.CarsDisplayID);
    } catch (error) {
      console.error('Error fetching car details:', error);
    }
  }
}
