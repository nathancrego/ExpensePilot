import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpensecategoryComponent } from './add-expensecategory.component';

describe('AddExpensecategoryComponent', () => {
  let component: AddExpensecategoryComponent;
  let fixture: ComponentFixture<AddExpensecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddExpensecategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddExpensecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
