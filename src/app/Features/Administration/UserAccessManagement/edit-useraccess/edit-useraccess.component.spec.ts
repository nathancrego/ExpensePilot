import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUseraccessComponent } from './edit-useraccess.component';

describe('EditUseraccessComponent', () => {
  let component: EditUseraccessComponent;
  let fixture: ComponentFixture<EditUseraccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUseraccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditUseraccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
