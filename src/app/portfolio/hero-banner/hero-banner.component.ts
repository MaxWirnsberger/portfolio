import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss',
})
export class HeroBannerComponent {
  arrowImages: string[] = [
    './../../../assets/imgs/hero-banner/arrow1.png',
    './../../../assets/imgs/hero-banner/arrow2.png',
    './../../../assets/imgs/hero-banner/arrow3.png',
    './../../../assets/imgs/hero-banner/arrow4.png',
    './../../../assets/imgs/hero-banner/arrow5.png',
    './../../../assets/imgs/hero-banner/arrow6.png',
    './../../../assets/imgs/hero-banner/arrow7.png',
  ];
  currentImageIndex = 0;
  private imageSwitchInterval: any;

  ngOnInit(): void {
    this.arrowImages.forEach((imagePath) => {
      const img = new Image();
      img.src = imagePath;
    });

    this.imageSwitchInterval = setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.arrowImages.length;
    }, 150);
  }

  ngOnDestroy(): void {
    if (this.imageSwitchInterval) {
      clearInterval(this.imageSwitchInterval);
    }
  }
}
