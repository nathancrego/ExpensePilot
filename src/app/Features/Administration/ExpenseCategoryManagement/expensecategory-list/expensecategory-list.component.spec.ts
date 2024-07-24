import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensecategoryListComponent } from './expensecategory-list.component';

describe('ExpensecategoryListComponent', () => {
  let component: ExpensecategoryListComponent;
  let fixture: ComponentFixture<ExpensecategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensecategoryListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpensecategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
