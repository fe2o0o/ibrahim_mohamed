import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {

    this.getMode()
    // this.setMode()

  }



  sideBarStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  isOverlay: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  moodSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)


  setMode() {
    const theme = this.moodSubject.getValue() ? "dark" : "light";
    if (theme == 'dark') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
    localStorage.setItem('theme', theme)
  }


  getMode() {
    const theme = localStorage.getItem('theme')
    const browserDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme !== null) {
      if (theme === 'dark') {
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark');
        this.moodSubject.next(true)
        this.setMode()
      } else {
        this.moodSubject.next(false)
        this.setMode()
      }
    } else if (browserDark) {
      document.documentElement.classList.add('dark');
         this.moodSubject.next(true)
        this.setMode()
    }
  }

}
