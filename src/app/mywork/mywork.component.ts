import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.css'
})
export class MyworkComponent {
  basePath:string = 'assets/mywork';
  baseUrl:string = 'https://github.com/Mano4life/'
  projects = [
    {
      imgSrc: `${this.basePath}/FasheEcommerce.png`,
      title: 'FasheEcommerce',
      technologies: ['HTML', 'CSS', 'JS'],
      link: `${this.baseUrl}/FasheEcommerce`
    },
    {
      imgSrc: `${this.basePath}/designSlider.png`,
      title: 'DesignSlider',
      technologies: ['HTML', 'CSS', 'JS'],
      link: `${this.baseUrl}/in-out-carousel`
    },
    {
      imgSrc: `${this.basePath}/Ogani.png`,
      title: 'Ogani Shop landing page',
      technologies: ['HTML', 'CSS', 'BootStrap'],
      link: `${this.baseUrl}/Ogani`
    },
    {
      imgSrc: `${this.basePath}/calculator.png`,
      title: 'Calculator',
      technologies: ['HTML', 'CSS', 'JS'],
      link: `${this.baseUrl}/calculator`
    },
    {
      imgSrc: `${this.basePath}/ReactPortfolio.png`,
      title: 'React Portfolio',
      technologies: ['HTML', 'CSS', 'JS', 'React'],
      link: `${this.baseUrl}/portfolio`
    },
    {
      imgSrc: `${this.basePath}/CharityTemp.png`,
      title: 'Charity Temp landing page',
      technologies: ['HTML', 'CSS', 'BootStrap'],
      link: `${this.baseUrl}/Charity`
    },
  ]
}
