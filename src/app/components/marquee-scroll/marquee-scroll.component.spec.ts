import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeScrollComponent } from './marquee-scroll.component';

describe('MarqueeScrollComponent', () => {
  let component: MarqueeScrollComponent;
  let fixture: ComponentFixture<MarqueeScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarqueeScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueeScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
