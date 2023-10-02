import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { VectaryViewerComponent } from './vectary-viewer/vectary-viewer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// @Component({
//   selector: 'bottom-sheet-overview-example',
//   templateUrl: './drag-drop/drag-drop.component.html',
//   styleUrls: ['drag-drop.component.scss']
// })
export class AppComponent implements OnInit {
  accounts: any;
  accountName: any;
  today =  new Date();
  code: any;
  accountId: any = 0;
  companyName: any;
  companyAddress: any;
  companyEmail: any;
  phone: any;
  datasource: any;
  openBalance: any;
  credit: any;

  displayedColumns: string[] = ['id', 'date', 'description', 'debit', 'credit', 'balance'];
  dataSource!: MatTableDataSource<any>;

  constructor(private _accountService: AccountsService, private _bottomSheet: MatBottomSheet){}
  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(){
    this._accountService.getAccounts().subscribe({
      next: res => {
        this.accounts = res;
      },
      error: err => console.log(err)
      
    })
  }
  getSelectedItem(selectedData:any){
    this.accountName = selectedData.name;
    this.code = selectedData.financialAccount.code
    this.companyName = selectedData.company;
    this.companyAddress = selectedData.address;
    this.companyEmail = selectedData.email;
    this.phone = selectedData.phone;
    this.getTransactionsBasedOnAccountId(selectedData.id);
  }
  getTransactionsBasedOnAccountId(accountId:any){
    return this._accountService.getTransactionsBasedOnAccountId(accountId).subscribe({
      next: res => {
        this.dataSource = new MatTableDataSource(res);
        this.openBalance = res.map((obj: any) => obj.accountBalance.openBalance)
        this.credit = res.map((obj: any) => obj.transactionDetails.amount);
      },
      error: err => console.log(err)
    });
  }
  openBottomSheet(){
    this._bottomSheet.open(DragDropComponent)
  }
  openVectaryViewer(){
    this._bottomSheet.open(VectaryViewerComponent);
  }
}
