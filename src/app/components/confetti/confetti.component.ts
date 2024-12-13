import { Component, OnInit } from '@angular/core';
interface ConfettiParticle {
  x: number;
  y: number;
  rotation: number;
  size: number;
  color: string;
  animationDuration: number;
  delay: number;
}

@Component({
  selector: 'app-confetti',
  standalone: false,
  templateUrl: './confetti.component.html',
  styleUrl: './confetti.component.scss',
})
export class ConfettiComponent implements OnInit {
  confettiParticles: ConfettiParticle[] = [];
  colors: string[] = ['#ff5b5b', '#ff9e00', '#00b0ff', '#32a852', '#ff77ff']; // Possible confetti colors

  constructor() {}

  ngOnInit(): void {
    this.generateConfetti();
    console.log('implemented');
  }

  triggerConfetti(): void {
    this.generateConfetti();
    console.log('====================================');
    console.log(this.confettiParticles);
    console.log('====================================');
  }
  test() {
    console.log(this.confettiParticles);
  }
  generateConfetti(): void {
    const numberOfParticles = 1000; // Number of confetti pieces to generate
    const particles: ConfettiParticle[] = [];

    for (let i = 0; i < numberOfParticles; i++) {
      const particle: ConfettiParticle = {
        x: Math.random() * 100, // Random horizontal position
        y: -20, // Start position (above the screen)
        rotation: Math.random() * 360, // Random rotation angle
        size: Math.random() * 10 + 5, // Random size between 5 and 15px
        color: this.colors[Math.floor(Math.random() * this.colors.length)], // Random color
        animationDuration: Math.random() * 2 + 2, // Random animation duration between 2 and 4 seconds
        delay: Math.random() * 2, // Random delay for each particle's animation
      };

      particles.push(particle);
    }

    this.confettiParticles = particles;
  }

  getParticleStyle(particle: ConfettiParticle): object {
    const result = {
      left: `${particle.x}vw`,
      top: `${particle.y}px`,
      width: `${particle.size - Math.floor(Math.random() * 5)}px`,
      height: `${particle.size + Math.floor(Math.random() * 5)}px`,
      backgroundColor: particle.color,
      animationDuration: `${particle.animationDuration}s`,
      animationDelay: `${particle.delay}s`,
      transform: `rotate(${particle.rotation}deg)`,
    };
    return result;
  }
}
