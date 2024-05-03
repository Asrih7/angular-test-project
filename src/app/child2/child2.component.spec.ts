import { TestBed, async } from '@angular/core/testing';
import { Child2Component } from './child2.component';

describe('Child2Component', () => {
  let component: Child2Component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(Child2Component);
    component = fixture.componentInstance;
  });

  it('should create the Child2Component component', () => {
    expect(component).toBeTruthy();
  });
});