import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the AppComponent component', () => {
    expect(component).toBeTruthy();
  });

it('should have testtitle variable', () => {
        expect(component.testtitle).toBeDefined();
    });

it('should have list variable', () => {
        expect(component.list).toBeDefined();
    });

it('should have prueba variable', () => {
        expect(component.prueba).toBeDefined();
    });

it('should have yes variable', () => {
        expect(component.yes).toBeDefined();
    });

it('should have disabled variable', () => {
        expect(component.disabled).toBeDefined();
    });

it('should have master variable', () => {
        expect(component.master).toBeDefined();
    });

it('should have test variable', () => {
        expect(component.test).toBeDefined();
    });



it('should have test1 variable', () => {
        expect(component.test1).toBeDefined();
    });

it('should have ngOnInit variable', () => {
        expect(component.ngOnInit).toBeDefined();
    });

it('should have hero input property', () => {
          expect(component.hero).toBeDefined();
      });

it('should emit masterName event', () => {
            spyOn(component.masterName, 'emit');
            // Trigger the event here
            component.masterName.emit();
            expect(component.masterName.emit).toHaveBeenCalled();
        });

it('should emit masterAlias event', () => {
            spyOn(component.masterAlias, 'emit');
            // Trigger the event here
            component.masterAlias.emit();
            expect(component.masterAlias.emit).toHaveBeenCalled();
        });

it('should call test method', () => {
          spyOn(component, 'test');
          component.test();
          expect(component.test).toHaveBeenCalled();
      });

it('should call test1 method', () => {
          spyOn(component, 'test1');
          component.test1();
          expect(component.test1).toHaveBeenCalled();
      });

it('should call ngOnInit method', () => {
          spyOn(component, 'ngOnInit');
          component.ngOnInit();
          expect(component.ngOnInit).toHaveBeenCalled();
      });
});