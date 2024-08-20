import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../services/investment.services';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private investmentService: InvestmentService) {}

  txtInitialInvestment = signal('0');
  txtAnnualInvestment = signal('0');
  txtExpectedReturn = signal('0');
  txtDuration = signal('0');

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.txtInitialInvestment(),
      duration: +this.txtDuration(),
      expectedReturn: +this.txtExpectedReturn(),
      annualInvestment: +this.txtAnnualInvestment()
    });
    this.txtInitialInvestment.set('0');
    this.txtAnnualInvestment.set('0');
    this.txtExpectedReturn.set('0');
    this.txtDuration.set('0');
    
  }
}
