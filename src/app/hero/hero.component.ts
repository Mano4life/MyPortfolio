import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  circlePattern: string = "assets/pattern-circle.svg";
  ringsPattern: string = "assets/pattern-rings.svg";
  mycv: string = "https://drive.google.com/file/d/1DWd6J4uJ_4thsYEYUfHuAJMRYndQBmTt/view?usp=sharing"
}
