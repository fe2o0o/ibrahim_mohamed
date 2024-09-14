import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Typewriter } from 'ngx-simple-typewriter';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Typewriter],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements AfterViewInit {


  @ViewChild('typeWriter') typeWriter !:ElementRef


  ngAfterViewInit(): void {
      
  }

  words:string[]=["Front End Developer |" , "Web Developer |" , "MEAN Stack Developer |"]
}
