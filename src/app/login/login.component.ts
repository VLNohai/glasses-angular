import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  Submit(login : any){
    console.log('submited', login);
  }

  onLogin()
  {
    if(this.email === "test@test.com" && this.password === "test!")
    {
      alert("Login!");
    }
    else{
      alert("Wrong password");
    }
  }
}
