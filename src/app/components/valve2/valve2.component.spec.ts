import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Valve2Component } from './valve2.component';

describe('Valve2Component', () => {
  let component: Valve2Component;
  let fixture: ComponentFixture<Valve2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Valve2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Valve2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
