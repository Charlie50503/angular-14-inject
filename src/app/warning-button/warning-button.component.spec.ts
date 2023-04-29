import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningButtonComponent } from './warning-button.component';

describe('WarningButtonComponent', () => {
  let component: WarningButtonComponent;
  let fixture: ComponentFixture<WarningButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
