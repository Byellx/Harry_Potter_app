import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public footer_styles = {
    footer_main: 'footer_main',
    footer_span: 'footer_span'
  }
}
