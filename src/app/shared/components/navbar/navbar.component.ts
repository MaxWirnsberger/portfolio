import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  currentImageIndex = 0;
  isMenuOpen = false;

  burgerImagesOpen: string[] = [
    'assets/imgs/navBar/burger.png',
    'assets/imgs/navBar/burgerOpen1.png',
    'assets/imgs/navBar/burgerOpen2.png',
    'assets/imgs/navBar/burgerOpen3.png',
    'assets/imgs/navBar/burgerClose.png',
  ];

  burgerImagesClose: string[] = [
    'assets/imgs/navBar/burgerClose.png',
    'assets/imgs/navBar/burgerCloseOpen1.png',
    'assets/imgs/navBar/burgerCloseOpen2.png',
    'assets/imgs/navBar/burgerCloseOpen3.png',
    'assets/imgs/navBar/burger.png',
  ];

  showMenu() {
    if (!this.isMenuOpen) {
      document.getElementById('bodyElement')?.classList.add('menuSetting');
      document
        .getElementById('menuContainer')
        ?.classList.remove('display_none');
      this.transformBurgerMenuOpen();
    } else {
      document.getElementById('bodyElement')?.classList.remove('menuSetting');
      document.getElementById('menuContainer')?.classList.add('display_none');
      this.transformBurgerMenuClose();
    }
  }

  transformBurgerMenuOpen() {
    while (this.currentImageIndex < this.burgerImagesOpen.length) {
      let burger = document.getElementById('burgerImg');
      if (burger) {
        burger.innerHTML = `
          <img src="./../../../../${
            this.burgerImagesOpen[this.currentImageIndex]
          }"
          alt="burger Menu"/>`;
        this.currentImageIndex++;
      }
    }
    this.currentImageIndex = 0;
    this.isMenuOpen = true;
  }

  transformBurgerMenuClose() {
    while (this.currentImageIndex < this.burgerImagesClose.length) {
      let burger = document.getElementById('burgerImg');
      if (burger) {
        burger.innerHTML = `
          <img src="./../../../../${
            this.burgerImagesClose[this.currentImageIndex]
          }"
          alt="burger Menu"/>`;
        this.currentImageIndex++;
      }
    }
    this.currentImageIndex = 0;
    this.isMenuOpen = false;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.showMenu();
  }
}
