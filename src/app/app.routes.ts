import { CalculatorComponent } from './../calculator/calculator.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
];
