import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private _service:MainService){}


  //  ngOnInit(){
  //   alert("welcome to ALN TEAVELS")
  //  }
  registrationForm=new FormGroup({
    id:new FormControl(),
    source:new FormControl(),
    destination:new FormControl(),
    name:new FormControl(),
    mobile:new FormControl(),
  })


postData()
{
  console.log(this.registrationForm.value)
  this._service.getData(this.registrationForm.value).subscribe(
    ()=>{
      alert("inserted succesfully")
    }
  )
}
update()
{
    this._service.updatedata(this.registrationForm.value).subscribe(
      ()=>{
        alert("updated successfully")
      }
    )
}



}
