import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsDisplay } from '../carsdisplay';
import { CarLocationComponent } from '../car-location/car-location.component';
import { CarService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule, CarLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by Car Make/Model" #filter (input)="filterResults(filter.value)" />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-car-location *ngFor="let car of filteredCarList"
        [CarsDisplay]="car"></app-car-location>
    </section>
  `,
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  CarDisplayList: CarsDisplay[] = [];  // Array of CarsDisplay objects
  filteredCarList: CarsDisplay[] = [];  // Filtered array of CarsDisplay objects
  CarService: CarService = inject(CarService);

constructor() {
  this.CarService.getAllCarsDisplay().then((CarDisplayList: CarsDisplay[]) => {
    this.CarDisplayList = CarDisplayList;
    this.filteredCarList = [...this.CarDisplayList];
  }).catch((error) => {
    console.error('Error fetching car display data:', error);
  });
}


  // Function to filter results based on input text
  filterResults(text: string) {
    if (!text) {
      this.filteredCarList = this.CarDisplayList;
      return;
    }

    // Filter cars based on make or model
    this.filteredCarList = this.CarDisplayList.filter((car) =>
      car.make.toLowerCase().includes(text.toLowerCase()) ||
      car.model.toLowerCase().includes(text.toLowerCase())
    );
  }
}
