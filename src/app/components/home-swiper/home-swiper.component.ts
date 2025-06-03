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
import { MatIconModule } from '@angular/material/icon';
import { CategoryModel } from 'src/app/core/models/category.model';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home-swiper',
  imports: [MatIconModule],
  templateUrl: './home-swiper.component.html',
  styleUrl: './home-swiper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeSwiperComponent implements AfterViewInit {
  // #region refs
  swiperRef = viewChild.required<ElementRef<SwiperContainer>>('swiperElement');

  // #region inputs
  categories = input.required<CategoryModel.CategoryResponse[]>();

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
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        enabled: true,
        clickable: true,
      },
    };

    Object.assign(swiperElementConstructor, swiperOptions);
    this.swiperElement.set(swiperElementConstructor);
    this.swiperElement()?.initialize();
    this.swiperElement()?.setAttribute('autoplay', 'true');
    this.swiperElement()?.setAttribute('autoplay-delay', '3000');
    this.swiperElement()?.setAttribute('loop', 'true');
  }
}
