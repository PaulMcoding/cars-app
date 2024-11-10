import {Component} from '@angular/core';
import {CarComponent} from './car/car.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Cars';
}
