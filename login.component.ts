import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _service:LoginService,private fb:FormBuilder){}

  registrationForm= this.fb.group({
      name: ['', Validators.required],
      id: ['', [Validators.required]],
      mobile: ['', Validators.required],
   
  });

  postadmin()
  {
    this._service.postda(this.registrationForm.value).subscribe(
      ()=>{
       alert("Inserted Succesfully")
      }
    )
  }

  

}
