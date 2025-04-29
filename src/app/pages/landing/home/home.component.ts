import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface ICategories {
  name: string;
  subcategories?: ICategories[];
  route?: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    RouterModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  subCategories = signal<ICategories[]>([]);

  categories = signal<ICategories[]>([
    {
      name: 'Mousepads',
      subcategories: [
        {
          name: 'Mousepads de 90x40',
          route: '/mousepads',
        },
        {
          name: 'Mousepads de 45x40',
          route: '/mousepads',
        },
      ],
    },
    {
      name: 'Mangas',
      route: '/mangas',
    },
    {
      name: 'Teclados',
      route: '/teclados',
    },
    {
      name: 'Mouse',
      route: '/mouse',
    },
    {
      name: 'Audifonos',
      route: '/audifonos',
    },
    {
      name: 'Accesorios',
      route: '/accesorios',
    },
  ]);

  featuredProducts = [
    {
      id: 1,
      name: 'Featured Product 1',
      price: 99.99,
      image: 'assets/images/products/product1.jpg',
      description: 'Amazing product description',
    },
    // Add more featured products as needed
  ];

  // #region methods
}
