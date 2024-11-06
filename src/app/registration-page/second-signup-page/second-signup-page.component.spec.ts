import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSignupPageComponent } from './second-signup-page.component';

describe('SecondSignupPageComponent', () => {
  let component: SecondSignupPageComponent;
  let fixture: ComponentFixture<SecondSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondSignupPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
