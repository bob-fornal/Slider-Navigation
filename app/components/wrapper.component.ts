
import { Component, Input } from '@angular/core';

import { IOffsetType } from '../types/offset.type';
import { IPositionType } from '../types/position.type';
import { IStructureType } from '../types/structure.type';

@Component({
  selector: 'wrapper',
  templateUrl: './app/components/wrapper.component.html'
})
export class WrapperComponent {
  @Input('Structure') structure: IStructureType[][];
  @Input('StartPosition') startPosition: IPositionType;

  activePosition: IPositionType = (typeof this.startPosition === 'undefined')
    ? { horizontal: 0, vertical: 0 }
    : this.startPosition;
  activeStyle: IOffsetType = this.generateStyle();
  hoveredElement: IStructureType = {
    active: false
  };

  enter(element: IStructureType) {
    this.hoveredElement = element;
  }
  leave() {
    this.hoveredElement = { active: false };
  }

  select(position: IPositionType) {
    this.activePosition = position;
    this.activeStyle = this.generateStyle();
  }

  private generateStyle(): IOffsetType {
    let horizontal: number = this.activePosition.horizontal * 100;
    let vertical: number = this.activePosition.vertical * 100;

    let active_style: IOffsetType = {
      horizontal: (horizontal === 0) ? '0' : `-${horizontal}vw`,
      vertical: (vertical === 0) ? '0' : `-${vertical}vh`
    }
    console.log(active_style);
    return active_style;
  }
}
