import { TestBed, async } from '@angular/core/testing';
import { Child3Component } from './child3.component';

describe('Child3Component', () => {
  let component: Child3Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(Child3Component);
    component = fixture.componentInstance;
  });

  it('should create the Child3Component component', () => {
    expect(component).toBeTruthy();
  });
});