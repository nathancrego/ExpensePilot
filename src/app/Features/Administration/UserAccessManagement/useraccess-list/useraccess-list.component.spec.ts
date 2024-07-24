import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraccessListComponent } from './useraccess-list.component';

describe('UseraccessListComponent', () => {
  let component: UseraccessListComponent;
  let fixture: ComponentFixture<UseraccessListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UseraccessListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UseraccessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
