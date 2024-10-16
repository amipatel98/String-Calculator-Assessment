import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringCalculatorService {
  constructor() {}

  add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter = /[,\n]/;

    if (numbers.startsWith('//')) {
      const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
      if (delimiterMatch) {
        delimiter = new RegExp(delimiterMatch[1]);
        numbers = numbers.substring(delimiterMatch[0].length);
      }
    }

    const numArray = numbers.split(delimiter);

    const negativeNumbers = numArray.filter((n) => +n < 0);
    if (negativeNumbers.length) {
      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(', ')}`
      );
    }

    return numArray.reduce((sum, num) => sum + (+num || 0), 0);
  }
}
