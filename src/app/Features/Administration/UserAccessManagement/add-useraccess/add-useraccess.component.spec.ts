import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUseraccessComponent } from './add-useraccess.component';

describe('AddUseraccessComponent', () => {
  let component: AddUseraccessComponent;
  let fixture: ComponentFixture<AddUseraccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUseraccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddUseraccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
