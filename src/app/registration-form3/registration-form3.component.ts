import { Component, OnInit } from '@angular/core';
import {employmentDetails} from '../classes';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-form3',
  templateUrl: './registration-form3.component.html',
  styleUrls: ['./registration-form3.component.css']
})
export class RegistrationForm3Component implements OnInit {

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  employmentObj:employmentDetails=new employmentDetails();
  registerEmployment(employmentDetails){
    this.employmentObj.email=employmentDetails.value.Email;
    this.employmentObj.type_of_emp=employmentDetails.value.typeOfEmployment;
    this.employmentObj.annual_sal=employmentDetails.value.annualSalary;
    this.employmentObj.existing_emi=employmentDetails.value.existingEMI;
    console.log(this.employmentObj);
    this.http.post<any>("http://localhost:51508/api/identity_details",this.employmentObj)
    .subscribe(data=>{
      if  (data==null)
      {
        alert("Registration Unsucessful")
      }
      else
      {
        this.router.navigate(['registerIdentity'])
      }
    })
    }
  }

