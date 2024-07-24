import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpensecategoryComponent } from './edit-expensecategory.component';

describe('EditExpensecategoryComponent', () => {
  let component: EditExpensecategoryComponent;
  let fixture: ComponentFixture<EditExpensecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditExpensecategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditExpensecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
