import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  github: string = "https://github.com/Mano4life"
  linkedin: string = "https://www.linkedin.com/in/momen-helmi/"
  instagram: string = "https://www.instagram.com/momenhelmy101/"
}
