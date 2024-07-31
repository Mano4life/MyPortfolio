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
}
