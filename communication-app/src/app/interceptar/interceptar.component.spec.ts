import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptarComponent } from './interceptar.component';

describe('InterceptarComponent', () => {
  let component: InterceptarComponent;
  let fixture: ComponentFixture<InterceptarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterceptarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterceptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
