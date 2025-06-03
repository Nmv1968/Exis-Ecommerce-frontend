import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryModel } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-marquee-scroll',
  imports: [RouterModule],
  templateUrl: './marquee-scroll.component.html',
  styleUrl: './marquee-scroll.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarqueeScrollComponent {
  // #region inputs
  categories = input.required<CategoryModel.CategoryResponse[]>();
}
