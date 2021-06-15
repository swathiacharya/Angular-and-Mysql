import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shareddata/user.component';
import { UserAuthenticationService } from 'src/app/service/user-authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message:string =""
  regForm!:FormGroup

  constructor(
    private fb: FormBuilder,
    private userService :UserAuthenticationService    
    ) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: ['',[Validators.required]],
      mobileNumber: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
      email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      password: ['',[Validators.required,Validators.pattern("[a-zA-z0-9@_]{6,}")]]
    })
  }

  register(){
    let user : User
    user = new User(
          this.regForm.value.name,
          this.regForm.value.mobileNumber,
          this.regForm.value.email,
          this.regForm.value.password
        )

    this.userService.registration(user).subscribe(
      response =>{
        console.log(response)
       
        
      },
      error =>{
        
        console.log(error);
        
      }
    );

    this.regForm.reset();
   





  }

}
