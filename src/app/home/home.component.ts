import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loanAmount: number;
  loanTenure: number;
  roi: number;
  emi: number;
  calcEMI() {
    // this.EMI= this.loanAmount*this.ROI[ ((1+this.ROI)^this.loanTenure)/ (((1+this.ROI)^this.loanTenure)-1)];
    this.loanAmount = Number(this.loanAmount);
    this.loanTenure = Number(this.loanTenure);
    this.roi = Number(this.roi);
    //this.emi= this.loanAmount*this.ROI[ ((1+this.ROI)^this.loanTenure)/ (((1+this.ROI)^this.loanTenure)-1)];
    this.roi = this.roi / (12 * 100); // one month interest
    this.loanTenure = this.loanTenure * 12; 
    this.emi = (this.loanAmount * this.roi * Math.pow( (1+this.roi) , this.loanTenure) ) / (Math.pow( (1+this.roi) , this.loanTenure) - 1);
    
    //emi = (p * r * pow(1 + r, t)) / (pow(1 + r, t) - 1);
  }
}