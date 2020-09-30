import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-form1',
  templateUrl: './application-form1.component.html',
  styleUrls: ['./application-form1.component.css']
})
export class ApplicationForm1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  titles = ['Mr.', 'Mrs.' , 'Ms.'];
  occupations = ['Profession', 'Employment', 'Business'];
  sources = ['Earned', 'Interest', 'Profit', 'Dividend', 'Rental', 'Royalty' ];
  incomes = ['Less then 5LPA', '5LPA-10LPA', '10LPA-25LPA', '25LPA and More'];

  result = "";
  line1 = "";
  line2 = "";
  landmark = "";
  state = "";
  city = "";
  code = "";
    checkAdress() {
      var checkBox = document.getElementById("defaultCheck1");
      if(this.result==""){
        this.line1 = ((document.getElementById("resLine1") as HTMLInputElement).value);
        this.line2 = ((document.getElementById("resLine2") as HTMLInputElement).value);
        this.landmark = ((document.getElementById("resLandmark") as HTMLInputElement).value);
        this.state = ((document.getElementById("resState") as HTMLInputElement).value);
        this.city = ((document.getElementById("resCity") as HTMLInputElement).value);
        this.code = ((document.getElementById("resCode") as HTMLInputElement).value);
        this.result = "disabled";
      }
      else {
        this.result = "";
        this.line1 = "";
        this.line2 = "";
        this.landmark = "";
        this.state = "";
        this.city = "";
        this.code = "";
      }
    }
  }

