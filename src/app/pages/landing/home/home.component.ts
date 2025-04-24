import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  featuredProducts = [
    {
      id: 1,
      name: 'Featured Product 1',
      price: 99.99,
      image: 'assets/images/products/product1.jpg',
      description: 'Amazing product description'
    },
    // Add more featured products as needed
  ];
}
