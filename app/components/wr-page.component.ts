
import { Component, Input } from '@angular/core';

import { IStructureType } from '../types/structure.type';

@Component({
  selector: 'wr-page',
  templateUrl: './app/components/wr-page.component.html'
})
export class WrapperPageComponent {
  @Input('Page') page: IStructureType;
  @Input('Horizontal') horizontal: number;
  @Input('Vertical') vertical: number;
}
