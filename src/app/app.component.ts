import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconService } from './services/icon.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  providers: [IconService],
})
export class AppComponent {
  constructor(private iconService: IconService) {
    this.iconService.registerIcons();
  }
}
