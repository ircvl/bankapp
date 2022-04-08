import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno=""
  pswd=""
  amount=""

  acno1=""
  pswd1=""
  amount1=""

  


  constructor(private ds:DatabaseService) { }

  ngOnInit(): void {
  }
  deposit(){
    var acno = this.acno
    var pswd = this.pswd
    var amount = this.amount

    const result = this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(amount + "deposited successfully.... And new balace is:"+ result)

    }
  }

  withdraw(){
    var acno = this.acno1
    var pswd = this.pswd1
    var amount = this.amount1

    const result = this.ds.withdraw(this.acno1,this.pswd1,this.amount1)
    if(result){
      alert(amount + "withdrawed successfully.. And new balance is:"+ result)
    }

  }

}
