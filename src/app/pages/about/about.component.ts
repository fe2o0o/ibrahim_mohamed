import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TimelineModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {


  events = [
      {
        startDate: "4/2024",
        endDate: "present",
        companyName: "DevSolutions Company",
        sumary: [{
          title: "Super Admin Application for CRM Management.",
          desc:"Developed a Super Admin application to manage a CRM system, enabling complete control over data and users.",
          features: [
            "Designed and implemented user interfaces to facilitate management and control.",
            "Developed new features based on user requirements.",
            "Developed advanced and dynamic forms using Reactive Forms to improve data handling and user input.",
            "Optimized application performance and user experience."
          ]
        }]
      },
      {
        startDate: "4/2024",
        endDate: "present",
        companyName: "DevSolutions Company",
        sumary: [{
          title: "Super Admin Application for CRM Management.",
          desc:"Developed a Super Admin application to manage a CRM system, enabling complete control over data and users.",
          features: [
            "Designed and implemented user interfaces to facilitate management and control.",
            "Developed new features based on user requirements.",
            "Developed advanced and dynamic forms using Reactive Forms to improve data handling and user input.",
            "Optimized application performance and user experience."
          ]
        }]
    },
      {}
    ];


}
