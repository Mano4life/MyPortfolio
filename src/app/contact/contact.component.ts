import { Component } from '@angular/core';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name = document.getElementById("name")
  email = document.getElementById("email")
  message = document.getElementById("message")
  nameRegex = /^[a-zA-Z]+$/
  emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  onSubmit() {
    alert("thank you for your message")
  }
}
