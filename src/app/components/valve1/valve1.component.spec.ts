import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Valve1Component } from './valve1.component';

describe('Valve1Component', () => {
  let component: Valve1Component;
  let fixture: ComponentFixture<Valve1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Valve1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Valve1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
