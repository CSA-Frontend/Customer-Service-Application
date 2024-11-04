import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLeftComponentComponent } from './login-left-component.component';

describe('LoginLeftComponentComponent', () => {
  let component: LoginLeftComponentComponent;
  let fixture: ComponentFixture<LoginLeftComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginLeftComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginLeftComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
