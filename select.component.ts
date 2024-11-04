import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  constructor(private _x:LoginService){}

  v:any;
  ngOnInit()
  {
      this._x.getda().subscribe(
        (result)=>{
            this.v=result
            console.log(result)
        }
      )
  }
  delete(id)
{
  this._x.deletedata(id).subscribe(
    ()=>{
      alert("deleted successfully")
    }
  )
}

}
