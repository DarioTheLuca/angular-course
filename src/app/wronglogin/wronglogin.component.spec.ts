import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongloginComponent } from './wronglogin.component';

describe('WrongloginComponent', () => {
  let component: WrongloginComponent;
  let fixture: ComponentFixture<WrongloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
