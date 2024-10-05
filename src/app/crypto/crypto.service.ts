import { BehaviorSubject } from 'rxjs';
import { CryptoTransaction } from './crypto-transaction.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  public savedCryptoTransactionList = new BehaviorSubject<CryptoTransaction[]>([]);

  constructor(private http: HttpClient) {
    http.get<CryptoTransaction>('')
  }


}
