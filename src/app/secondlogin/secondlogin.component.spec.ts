import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondloginComponent } from './secondlogin.component';

describe('SecondloginComponent', () => {
  let component: SecondloginComponent;
  let fixture: ComponentFixture<SecondloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
