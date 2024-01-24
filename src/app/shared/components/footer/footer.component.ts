import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  sendMail(event: any) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('https://formspree.io/f/mkndojaz', {
      method: 'POST',
      body: new FormData(event.target),
      headers: {
        Accept: 'application/json',
      },
    })
      .then(() => {
        window.location.href = './send_mail.html';
      })
      .catch((error) => {
        console.log(error);
      });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
