import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoPlannerComponent } from './crypto-planner.component';

describe('CryptoPlannerComponent', () => {
  let component: CryptoPlannerComponent;
  let fixture: ComponentFixture<CryptoPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoPlannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
