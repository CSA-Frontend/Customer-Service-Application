import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalSignupPageComponent } from './final-signup-page.component';

describe('FinalSignupPageComponent', () => {
  let component: FinalSignupPageComponent;
  let fixture: ComponentFixture<FinalSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalSignupPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
