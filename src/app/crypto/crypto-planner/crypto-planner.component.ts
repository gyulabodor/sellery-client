import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'crypto-planner',
  templateUrl: './crypto-planner.component.html',
  styleUrls: ['./crypto-planner.component.css']
})
export class CryptoPlannerComponent implements OnInit{

  public hasBaseCurrencySettings$ = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  ngOnInit(): void {
    this.hasBaseCurrencySettings$.next(false);
  }

}
