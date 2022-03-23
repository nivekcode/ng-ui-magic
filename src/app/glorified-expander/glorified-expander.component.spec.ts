import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlorifiedExpanderComponent } from './glorified-expander.component';

describe('GlorifiedExpanderComponent', () => {
  let component: GlorifiedExpanderComponent;
  let fixture: ComponentFixture<GlorifiedExpanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlorifiedExpanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlorifiedExpanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
