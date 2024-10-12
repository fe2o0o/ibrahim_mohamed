import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Typewriter } from 'ngx-simple-typewriter';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Typewriter , NgClass],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements AfterViewInit {

  constructor(public _GlobalService:GlobalService) {

  }

  @ViewChild('typeWriter') typeWriter !:ElementRef


  ngAfterViewInit(): void {

  }

  words:string[]=["Front End Developer |" , "Web Developer |" , "MEAN Stack Developer |"]
}
