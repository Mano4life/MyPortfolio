import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  imgPath = 'assets/pattern-rings.svg';
  skills = [
    {
      title: 'HTML',
      experience: '2 Years Experience'
    },
    {
      title: 'CSS',
      experience: '2 Years Experience'
    },
    {
      title: 'Javascript',
      experience: '1 Year Experience'
    },
    {
      title: 'Angular',
      experience: '4 months Years Experience'
    },
    {
      title: 'Git',
      experience: '6 Months Experience'
    },
    {
      title: 'PHP',
      experience: '1 Year Experience'
    }
  ]
}
