import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction:any
  acno:any

  constructor(private ds:DatabaseService) {
    this.acno = JSON.parse(localStorage.getItem('currentAcno')||'')
    this.ds.transaction(this.acno)
    .subscribe((result:any)=>{
      this.transaction = result.transaction
    },
    (result)=>{
      alert(result.console.error.transaction)
      
    })
    console.log(this.transaction);
    
   }

  ngOnInit(): void {
  }

}
