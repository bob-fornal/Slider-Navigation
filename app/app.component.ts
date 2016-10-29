
import { Component } from '@angular/core';

import { IStructureType } from './types/structure.type';
import { IPositionType } from './types/position.type';

import { WrapperComponent } from './components/wrapper.component';
import { WrapperPageComponent } from './components/wr-page.component';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent {

  structure: IStructureType[][] = [
    [
      { active: true, name: 'test-first', description: 'First Test'},
      { active: true, name: 'test-third', description: 'Third Test'},
      { active: false}
    ],
    [
      { active: false},
      { active: true, name: 'test-second', description: 'Second Test'},
      { active: false}
    ],
    [
      { active: false},
      { active: false},
      { active: false}
    ]
  ];

  startHorizontal: number = 0;
  startVertical: number = 0;
  startPosition: IPositionType = {
    horizontal: this.startHorizontal,
    vertical: this.startVertical
  };

}
