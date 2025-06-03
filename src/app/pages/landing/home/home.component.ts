import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { register } from 'swiper/element/bundle';
import { MarqueeScrollComponent } from 'src/app/components/marquee-scroll/marquee-scroll.component';
import { CategoryModel } from 'src/app/core/models/category.model';
import { MediaMatcher } from '@angular/cdk/layout';
import { HomeSwiperComponent } from 'src/app/components/home-swiper/home-swiper.component';
import { CategoriesSwiperComponent } from 'src/app/components/categories-swiper/categories-swiper.component';
register();

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
    MarqueeScrollComponent,
    HomeSwiperComponent,
    CategoriesSwiperComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private mediaMatcher: MediaMatcher) {
    this._mobileQuery = this.mediaMatcher.matchMedia('(max-width: 920px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () =>
      this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  // #region states
  expandedMenu = signal(false);

  categories = signal<CategoryModel.CategoryResponse[]>([
    {
      id: '1',
      name: 'Mousepads',
      description: 'DESLIZA CON PRECISIÓN',
      additionalInfo: 'Encuentra el mousepad perfecto para tu setup gamer',
      image:
        'https://wallpapers.com/images/featured/fondos-de-tecnologia-w65hwkhmusntb0j9.jpg',
      miniature:
        'https://res.cloudinary.com/corsair-pwa/image/upload/w_256,h_256,c_pad/products/Gaming-Mousepads/base-mm700-rgb-config/Gallery/MM700_RGB_01.png',
      subcategories: [
        {
          id: '1.1',
          name: 'Mousepads de 90x40',
          route: '/mousepads',
        },
        {
          id: '1.2',
          name: 'Mousepads de 45x40',
          route: '/mousepads',
        },
      ],
    },
    {
      id: '2',
      name: 'Mangas',
      description: 'COMODIDAD Y RENDIMIENTO EN CADA MOVIMIENTO',
      additionalInfo:
        'Protege tus brazos y mejora tu agarre con nuestras mangas especializadas',
      image: 'https://wallpapers.com/images/hd/4k-tech-untb6o7k25k9gvy1.jpg',
      miniature:
        'https://bdrivensports.com/cdn/shop/products/3-pac-arm-sleeves-orange-611690.jpg?v=1710448437',
      route: '/mangas',
    },
    {
      id: '3',
      name: 'Teclados',
      description: 'TECLEA A TU RITMO, DOMINA EL JUEGO',
      additionalInfo:
        'Descubre nuestros teclados disponibles y mejora tu experiencia de juego',
      image: 'https://wallpapers.com/images/hd/4k-tech-2k2jzc0qemh7y38n.jpg',
      miniature:
        'https://www.todohogar.com/224848/teclado-mecanico-rgb-gamer-kg916-marvo.jpg',
      route: '/teclados',
    },
    {
      id: '4',
      name: 'Mouse',
      description: 'EL CONTROL EN LA PALMA DE TU MANO',
      additionalInfo: 'Elige el mouse que te dará la ventaja en cada click',
      image:
        'https://wallpapers.com/images/featured/fondos-de-tecnologia-w65hwkhmusntb0j9.jpg',
      miniature:
        'https://nomadaware.com.ec/wp-content/uploads/NomadaWare_mouse_razer_deathadder_essential-3.webp',
      route: '/mouse',
    },
    {
      id: '5',
      name: 'Audifonos',
      description: 'SONIDO ENVOLVENTE, JUEGA SIN LIMITES',
      additionalInfo:
        'Sumérgete en la acción con nuestros audífonos de alta calidad',
      image: 'https://wallpapers.com/images/hd/4k-tech-untb6o7k25k9gvy1.jpg',
      miniature:
        'https://es.nothing.tech/cdn/shop/files/Category_Page_-_Ear_-_Basic_layer_-_black_282a6805-41b5-45e6-8805-d8900e96791d_750x.png?v=1713271604',
      route: '/audifonos',
    },
    {
      id: '6',
      name: 'Accesorios',
      description: 'COMPLEMENTA TU SETUP, POTENCIA TU JUEGO',
      additionalInfo:
        'Encuentra los accesorios que llevarán tu experiencia de juego al siguiente nivel',
      image: 'https://wallpapers.com/images/hd/4k-tech-2k2jzc0qemh7y38n.jpg',
      miniature:
        'https://http2.mlstatic.com/D_NQ_NP_889337-MLA44330907885_122020-O.webp',
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

  // #region constants
  protected readonly isMobile = signal(true);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  // region lifecycle hooks
  ngOnInit(): void {
    // this.onSwiperInit();
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
