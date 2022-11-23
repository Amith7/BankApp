import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {//(3rd execute)
  //class-collection of properties and functions
  //properties /variables
  aim = "your perfect banking partner"
  account = "Enter Account here"//property binding
  acno = "";
  pswd = "";
  //  Database
  userDetails: any = {//data type mentions
    1000: { acno: 1000, username: 'amal', password: 1000, balance: 1000 },
    1001: { acno: 1001, username: 'arjun', password: 1001, balance: 1000 },
    1002: { acno: 1002, username: 'amala', password: 1002, balance: 1000 },
  }
  constructor() {//(1st execution)
    // it automatically invokes when the object is created
    //object intialization
  }

  ngOnInit(): void {//(2rd execute)
    //its a life cycle hooks of angular
    //when the component is created at same time it will intialize or authorize

  }
  acnoChange(event: any) { //data type mention
    console.log(event);
    this.acno = event.target.value//1000
    console.log(this.acno)

  }
  passChange(event: any) { //data type mention
    console.log(event);
    this.pswd = event.target.value//
    console.log(this.pswd)

  }

  login() {
    // alert("  Log in Clicked")

    var acno = this.acno;
    var pswd = this.pswd;
    var userDetails = this.userDetails
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {//always in single quotes
        alert("Log in SuceesFully")
      } else {
        alert("invalid pasword")
      }
    } else {
      alert("invalid User Details")
    }
  }
  // # varables
  // login(a: any, p: any) {
  //   // alert("  Log in Clicked")

  //   var acno = a.value;
  //   var pswd = p.value;
  //   var userDetails = this.userDetails
  //   if (acno in userDetails) {
  //     if (pswd == userDetails[acno]['password']) {//always in single quotes
  //       alert("Log in SuceesFully")
  //     } else {
  //       alert("invalid pasword")
  //     }
  //   } else {
  //     alert("invalid User Details")
  //   }
  // }

}


