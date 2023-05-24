import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _http: HttpClient) { }

  getAccounts(): Observable<any> {
    return this._http.get('http://localhost:8888/api/report/accounts')
  }

  getTransactionsBasedOnAccountId(accountId: any): Observable<any>{
      return this._http.get(`http://localhost:8888/api/report/transactions/${accountId}`)
  }
}
