import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CategoryModel } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-marquee-scroll',
  imports: [],
  templateUrl: './marquee-scroll.component.html',
  styleUrl: './marquee-scroll.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarqueeScrollComponent {
  // #region inputs
  categories = input.required<CategoryModel.CategoryResponse[]>();
}
