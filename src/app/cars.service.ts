import { Injectable } from '@angular/core';
import { CarsDisplay } from './carsdisplay';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url = 'http://localhost:3000/cars';

  // Corrected to use async/await
  async getAllCarsDisplay(): Promise<CarsDisplay[]> {
    try {
      const response = await fetch("http://localhost:3000/cars");
      const data = await response.json();
      return data ?? []; // Return the data or an empty array if no data is found
    } catch (error) {
      console.error('Error fetching car data:', error);
      return []; // Return an empty array in case of error
    }
  }

  async getCarsDisplayById(id: number): Promise<CarsDisplay | undefined> {
    try {
      const response = await fetch(`http://localhost:3000/cars/${id}`); // Fetch car by ID
      const data = await response.json();
      return data ?? undefined; // Return the car data or undefined if not found
    } catch (error) {
      console.error('Error fetching car data by ID:', error);
      return undefined; // Return undefined in case of error
    }
  }
}
