import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.html'],
})
export class ProgressComponent {
  progreso1: number = 25;
  progreso2: number = 25;

  public get getProgreso1() {
    return `${this.progreso1}%`;
  }

  public get getProgreso2() {
    return `${this.progreso2}%`;
  }
}
