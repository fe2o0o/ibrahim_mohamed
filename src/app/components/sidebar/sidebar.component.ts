import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private _GlobalService: GlobalService) {


    this._GlobalService.sideBarStatus.subscribe({
      next: (res: boolean) => {
        if (this._GlobalService.sideBarStatus.getValue()) {
          this.sideBarState = true
        } else {
          this.sideBarState = false;
        }
      }
    })
    this._GlobalService.isOverlay.subscribe({
      next: (res: boolean) => {
        if (this._GlobalService.isOverlay.getValue()) {
          this.isOverLay = true
        } else {
          this.isOverLay = false;
        }
      }
    })


  }

  isOverLay: boolean = true;
  sideBarState: boolean = true;

  toggleOverLay() {
    this._GlobalService.isOverlay.next(false)
  }

}
