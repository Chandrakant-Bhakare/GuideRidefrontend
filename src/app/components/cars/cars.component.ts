import { Component} from '@angular/core';


@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars = [
    { imageUrl: './Assests/Car10.jpeg', name: 'Toyota Corolla', details: 'A reliable and fuel-efficient car.' },
    { imageUrl: 'path/to/car-image2.jpg', name: 'Honda Civic', details: 'A compact car with great performance.' },
    { imageUrl: 'path/to/car-image3.jpg', name: 'Ford Mustang', details: 'A sporty car with a powerful engine.' },
    // Add more car objects as needed
  ];
}
