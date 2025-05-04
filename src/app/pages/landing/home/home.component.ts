import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  ElementRef,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();
interface ICategories {
  name: string;
  image?: string;
  description?: string;
  additionalInfo?: string;
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor() {}

  // #region refs
  swiperRef = viewChild.required<ElementRef<SwiperContainer>>('swiperElement');

  // #region states
  swiperElement = signal<SwiperContainer | null>(null);
  swiperOptions: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      clickable: true,
      enabled: true,
    }
  };

  categories = signal<ICategories[]>([
    {
      name: 'Mousepads',
      description: 'DESLIZA CON PRECISIÓN',
      additionalInfo: 'Encuentra el mousepad perfecto para tu setup gamer',
      image:
        'https://wallpapers.com/images/featured/fondos-de-tecnologia-w65hwkhmusntb0j9.jpg',
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
      description: 'COMODIDAD Y RENDIMIENTO EN CADA MOVIMIENTO',
      additionalInfo:
        'Protege tus brazos y mejora tu agarre con nuestras mangas especializadas',
      image: 'https://wallpapers.com/images/hd/4k-tech-untb6o7k25k9gvy1.jpg',
      route: '/mangas',
    },
    {
      name: 'Teclados',
      description: 'TECLEA A TU RITMO, DOMINA EL JUEGO',
      additionalInfo:
        'Descubre nuestros teclados disponibles y mejora tu experiencia de juego',
      image: 'https://wallpapers.com/images/hd/4k-tech-2k2jzc0qemh7y38n.jpg',
      route: '/teclados',
    },
    {
      name: 'Mouse',
      description: 'EL CONTROL EN LA PALMA DE TU MANO',
      additionalInfo: 'Elige el mouse que te dará la ventaja en cada click',
      image:
        'https://wallpapers.com/images/featured/fondos-de-tecnologia-w65hwkhmusntb0j9.jpg',
      route: '/mouse',
    },
    {
      name: 'Audifonos',
      description: 'SONIDO ENVOLVENTE, JUEGA SIN LIMITES',
      additionalInfo:
        'Sumérgete en la acción con nuestros audífonos de alta calidad',
      image: 'https://wallpapers.com/images/hd/4k-tech-untb6o7k25k9gvy1.jpg',
      route: '/audifonos',
    },
    {
      name: 'Accesorios',
      description: 'COMPLEMENTA TU SETUP, POTENCIA TU JUEGO',
      additionalInfo:
        'Encuentra los accesorios que llevarán tu experiencia de juego al siguiente nivel',
      image: 'https://wallpapers.com/images/hd/4k-tech-2k2jzc0qemh7y38n.jpg',
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

  // region lifecycle hooks
  ngOnInit(): void {
    // this.onSwiperInit();
  }

  ngAfterViewInit(): void {
    this.onSwiperInit();
  }

  // #region methods
  onSwiperInit() {
    const swiperElementConstructor = this.swiperRef()
      .nativeElement as SwiperContainer;

     const swiperOptions: SwiperOptions = {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          enabled: true,
          clickable: true,
        }
      };

    Object.assign(swiperElementConstructor, swiperOptions);
    this.swiperElement.set(swiperElementConstructor);
    this.swiperElement()?.initialize();
    this.swiperElement()?.setAttribute('autoplay', 'true');
    this.swiperElement()?.setAttribute('autoplay-delay', '3000');
    this.swiperElement()?.setAttribute('loop', 'true');
  }
}
