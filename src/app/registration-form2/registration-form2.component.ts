import { Component, OnInit } from '@angular/core';
import {vehicleDetails} from '../classes';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-form2',
  templateUrl: './registration-form2.component.html',
  styleUrls: ['./registration-form2.component.css']
})
export class RegistrationForm2Component implements OnInit {

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  vehicleObj:vehicleDetails=new vehicleDetails();
  registerVehicle(vehicleDetails){
    this.vehicleObj.Car_make=vehicleDetails.value.carMake;
    this.vehicleObj.Car_model=vehicleDetails.value.carModel;
    this.vehicleObj.Ex_showroom_price=vehicleDetails.value.showroomPrice;
    this.vehicleObj.On_road_price=vehicleDetails.value.onRoadPrice;
    console.log(this.vehicleObj);
    this.http.post<any>("http://localhost:51508/api/Vehicle_details",this.vehicleObj)
    .subscribe(data=>{
      if  (data==null)
      {
        alert("Registration Unsucessful")
      }
      else
      {
        this.router.navigate(['registerApplicant'])
      }
    })
    }
  }
 


    
