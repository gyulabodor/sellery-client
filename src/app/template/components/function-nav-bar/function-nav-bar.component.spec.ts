import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionNavBarComponent } from './function-nav-bar.component';

describe('FunctionNavBarComponent', () => {
  let component: FunctionNavBarComponent;
  let fixture: ComponentFixture<FunctionNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
