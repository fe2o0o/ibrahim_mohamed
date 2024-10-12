import { Component, HostListener, OnInit, signal, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgClass } from '@angular/common';
import { GlobalService } from './services/global.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass,RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    animations: [
    trigger('overlay', [
      state('show', style({
        position: 'fixed',
        left: '0',
        display: 'block'
      })),
      state('hide', style({
        position: 'fixed',
        left: '-100%'
      })),
      transition('show <=> hide', [
        style({})
        , animate('{{transitionParams}}'),
        transition('void => *', animate(0))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'hema_portofolio';



  constructor(public _GlobalService: GlobalService) {
    this._GlobalService.isOverlay.subscribe({
      next: (res: boolean)=>{
        if (this._GlobalService.isOverlay.getValue()) {
          this.isOverlay = true
        } else {
          this.isOverlay = false
        }
      }
    })
  }

  isOverlay: boolean = false;
    isAnimated: boolean = true;


  toggleTheme() {
    this._GlobalService.moodSubject.next(!this._GlobalService.moodSubject.getValue());
    this._GlobalService.setMode()
  }


  sidebarState = signal(true)

  ngOnInit(): void {
        if (window.innerWidth > 640 && window.innerWidth < 960) {
          this.sidebarState.set(false)
          this._GlobalService.sideBarStatus.next(false)
    } else {
          this.sidebarState.set(true)
          this._GlobalService.sideBarStatus.next(true)
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const windowWidth = event.target.innerWidth
    if (windowWidth < 960 && windowWidth >= 640 ) {
      this.sidebarState.set(false)
      this._GlobalService.sideBarStatus.next(false)
    }

        if (windowWidth > 960) {
          this.sidebarState.set(true)
          this._GlobalService.sideBarStatus.next(true)
    }


    if (windowWidth <= 640) {
      // this._GlobalService.isOverlay.next(true)
    } else {
      this._GlobalService.isOverlay.next(false)
    }

  }



  openCloseSidebar() {
    this.sidebarState.set(!this.sidebarState())
    this._GlobalService.sideBarStatus.next(this.sidebarState())
  }


  toogleOverLay() {
    this.isOverlay = !this.isOverlay;
    this._GlobalService.isOverlay.next(true)
    this._GlobalService.sideBarStatus.next(true)
  }

}
