import { Component, OnInit } from '@angular/core';
import { CanComponentLeave } from '../unsaved-changes.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements CanComponentLeave {

  private isInEdit: boolean = true;
  
  public canLeave(): boolean {
    if (this.isInEdit) {
      return window.confirm('You have unsaved changes..');
    }
    return true;
  }

}
