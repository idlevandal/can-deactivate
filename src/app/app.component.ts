import { Component } from '@angular/core';
import { CanComponentLeave } from './unsaved-changes.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements CanComponentLeave {
  
  public canLeave(): boolean {
    if ('isInEdit') {
      // show dialog and get value (true leave, false stay);
    }
    return true;
  }
}
