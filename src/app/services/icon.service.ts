import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS } from 'src/constants/icons';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  // #region constructor
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  // #region methods
  registerIcons() {
    ICONS.forEach((icon) => {
      this.iconRegistry.addSvgIconLiteral(
        icon.name,
        this.sanitizer.bypassSecurityTrustHtml(icon.svg)
      );
    });
  }
}
