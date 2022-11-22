import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',//view
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd execute
//Class-collection of properties and functions
//properties/variables
//function/methods -user defined function
  constructor() { }//1st execute
//it automatically invokes when the object is created
//object intialization
  ngOnInit(): void {// execute
    //its a life cycle hooks of angular
    //when the component is created at the same time it will intialize or authorize
  }

}
