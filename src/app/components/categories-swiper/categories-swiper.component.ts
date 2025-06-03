import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { CategoryModel } from 'src/app/core/models/category.model';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-categories-swiper',
  imports: [],
  templateUrl: './categories-swiper.component.html',
  styleUrl: './categories-swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CategoriesSwiperComponent implements AfterViewInit {
  // #region refs
  swiperRef = viewChild.required<ElementRef<SwiperContainer>>('swiperElement');

  // #region inputs
  categories = input.required<CategoryModel.CategoryResponse[]>();

  // #region states
  swiperElement = signal<SwiperContainer | null>(null);
  swiperOptions: SwiperOptions = {
    slidesPerView: 2,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  };

  // #region lifecycle
  ngAfterViewInit(): void {
    this.onSwiperInit();
  }

  // #region methods
  onSwiperInit() {
    const swiperElementConstructor = this.swiperRef()
      .nativeElement as SwiperContainer;

    const swiperOptions: SwiperOptions = {
      navigation: {
        enabled: true,
        nextEl: '.btn-swiper-next',
        prevEl: '.btn-swiper-prev',
      },
      slidesPerView: 2,
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    };

    Object.assign(swiperElementConstructor, swiperOptions);
    this.swiperElement.set(swiperElementConstructor);
    this.swiperElement()?.initialize();
    /* this.swiperElement()?.setAttribute('autoplay', 'true');
    this.swiperElement()?.setAttribute('autoplay-delay', '3000');
    this.swiperElement()?.setAttribute('loop', 'true'); */
  }
}
