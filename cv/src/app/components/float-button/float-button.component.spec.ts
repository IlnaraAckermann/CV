import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatButtonComponent } from './float-button.component';

describe('FloatButtonComponent', () => {
  let component: FloatButtonComponent;
  let fixture: ComponentFixture<FloatButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
