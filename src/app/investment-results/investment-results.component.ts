import { Component, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../services/investment.services';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  constructor(private investmentResultService: InvestmentService) {}

  results = computed(() => this.investmentResultService.resultsData());

}
