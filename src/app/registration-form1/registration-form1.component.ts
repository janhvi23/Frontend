import { Component, OnInit } from '@angular/core';
import {personalDetails} from '../classes'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-form1',
  templateUrl: './registration-form1.component.html',
  styleUrls: ['./registration-form1.component.css']
})
export class RegistrationForm1Component implements OnInit {

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  personalObj:personalDetails=new personalDetails();
  registerPersonal(personalDetails){
    this.personalObj.Name=personalDetails.value.Name;
    this.personalObj.Age=personalDetails.value.age;
    this.personalObj.Gender=personalDetails.value.gender;
    this.personalObj.Mobile=personalDetails.value.PhoneNumber;
    this.personalObj.email=personalDetails.value.Email;
    this.personalObj.address=personalDetails.value.Address;
    this.personalObj.state=personalDetails.value.State;
    this.personalObj.City=personalDetails.value.city;
    this.personalObj.Pin=personalDetails.value.Pincode;
    console.log(this.personalObj);
    this.http.post<any>("http://localhost:51508/api/Employment_details",this.personalObj)
    .subscribe(data=>{
      if  (data==null)
      {
        alert("Registration Unsucessful")
      }
      else
      {
        this.router.navigate(['registerEmployee'])
      }
    })
    }
  }
