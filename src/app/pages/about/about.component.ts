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


  events:any[] = [
      {
        startDate: "04/2024",
        endDate: "present",
        companyName: "DevSolutions Company",
        title:"Front End Developer Angular",
      sumary: [{
          desc:" Developed a Super Admin application to manage a Customer Relationship Management (CRM) system.  designed the application’s architecture and created user interfaces using Angular, Tailwind, and PrimeNG.  developed new features for the CRM app, including extensions for sending and receiving calls and messages. Additionally, redesigned modules to enhance the user experience and improve usability. ",
          features: [
            "Designed and implemented user interfaces to facilitate management and control.",
            "Developed new features based on user requirements.",
            "Developed advanced and dynamic forms using Reactive Forms to improve data handling and user input.",
            "Optimized application performance and user experience."
          ]
        }]
      },
      {
        startDate: "08/2024",
        endDate: "09/2024",
        companyName: "Web developer (Freelancer)",
        sumary: [{
          desc: `
            Develop and implement responsive user Interfaces for the organization software applications using HTML, CSS, Bootstrap, JavaScript.
    Determining the structure and design of web pages.
    Ensuring web design is optimized for mobile and tablet view responsive.
          `,
          features: [
            "Designed and implemented user interfaces to facilitate management and control.",
            "Developed user interfaces on user requirements.",
          ]
        }]
    },
      {
        startDate: "05/2023",
        endDate: "05/2024",
        companyName: "Pro Stack Academy",
        title:"",
        sumary: [{
          desc: `
           Planning, developing and using a variety of teaching methods and materials that assist students in meeting course objectives and which
are appropriate for students with differing educational and experiential backgrounds and learning styles, Provide guidance and inspiration to the academy student.
          `
        }]
    },
      {}
    ];

  eventsEducation: any[] = [
    {
        startDate: "10/2020",
        endDate: "05/2023",
      title: "Higher Institute of computer & information managment system",
        companyName:"King  Marriot Academy",

      sumary: [{
          desc:"I graduated from the Higher Institute of Computer Science and Management Information Systems, where I acquired a solid foundation in computer science fundamentals and database management. I completed my studies with a commendable grade of (Good) and I successfully developed my graduation project, which received an (Excellent) evaluation. This experience not only enhanced my technical skills but also fostered my ability to work on complex projects and collaborate effectively with my peers.",

      }]
    },
    {
        startDate: "03/2021",
        endDate: "09/2021",
      title: "Introduction to computer science course (C++)",
        companyName:"Route Academy",

      sumary: [{
          desc:"I completed a course in Computer Science that focused on the fundamentals of programming, specifically using C++. This course provided me with a strong understanding of programming concepts, enabling me to develop problem-solving skills and apply programming techniques effectively",
        features: [
          "C++/Java ",
          "Object Oriented Programming (OOP)",
          "Data Structure",
          "Algorithims",
          "Intro To Database (SQL)"
        ]
      }]
    },
    {
        startDate: "06/2022",
        endDate: "10/2022",
      title: "Front End Angular Course",
        companyName:"Route Academy",

      sumary: [{
          desc:"I completed a course in Front-End Development, specializing in Angular. This training equipped me with the skills to create dynamic and responsive web applications. I gained hands-on experience in building user interfaces, implementing components, and managing application state, which enhanced my ability to develop efficient and user-friendly web solutions.",
      }]
    },
    {}
  ]

}
