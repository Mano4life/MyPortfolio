import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  github: string = "https://github.com/Mano4life"
  linkedin: string = "https://www.linkedin.com/in/momen-helmi/"
  instagram: string = "https://www.instagram.com/momenhelmy101/"
}
