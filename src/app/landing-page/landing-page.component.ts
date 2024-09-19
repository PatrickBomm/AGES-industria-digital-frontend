import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ButtonModule, InputTextModule, SliderModule, FormsModule, InputNumberModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  rangeValues: number[] = [1,10];
  radiusValue: number = 0;
  stateValue: string = '';
  cityValue: string = '';
  cnaesValue: string[] = [];


  exampleTest(): string {
    return 'example';
  }

}
