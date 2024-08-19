import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { type InvestmentInputModel } from './interfaces/investment-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { type InvestmentResultModel } from './interfaces/investment-result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {

  resultsData?: InvestmentResultModel[];

  onCalculateInvestmentResults(data: InvestmentInputModel) {
    const annualData = [];
    const { initialInvestment, duration, expectedReturn, annualInvestment} = data;

    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    console.log(annualData);

    this.resultsData = annualData;
  
    //return annualData;
  }
  
}
