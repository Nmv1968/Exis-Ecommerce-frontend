import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSwiperComponent } from './home-swiper.component';

describe('HomeSwiperComponent', () => {
  let component: HomeSwiperComponent;
  let fixture: ComponentFixture<HomeSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
