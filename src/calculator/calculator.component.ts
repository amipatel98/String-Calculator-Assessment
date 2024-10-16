import { FormsModule } from '@angular/forms';
import { StringCalculatorService } from './../services/string-calculator.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  inputString = '';
  result: number | string = 0;

  constructor(private stringCalculatorService: StringCalculatorService) {}

  calculate() {
    try {
      // this.result = this.stringCalculatorService.add(this.inputString);
      // console.log('this.result', this.result);
      const normalizedInput = this.inputString.replace(/\\n/g, '\n');
      this.result = this.stringCalculatorService.add(normalizedInput);
      console.log('this.result', this.result);
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.result = error.message;
      } else {
        this.result = 'An unknown error occurred';
      }
    }
  }
}
