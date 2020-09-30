import { EmailValidator } from '@angular/forms';

export class vehicleDetails
{
    public Car_make:string;
    public Car_model:string;
    public Ex_showroom_price:number;
    public On_road_price:number;
}
export class personalDetails
{
    public Name:string;
    public Age:number;
    public Gender:string;
    public Mobile:number;
    public email:string;
    public address:string;
    public state:string;
    public City:string;
    public Pin:string;
}
export class employmentDetails
{
    public email:string;
    public type_of_emp:string;
    public annual_sal:number;
    public existing_emi:number;
}