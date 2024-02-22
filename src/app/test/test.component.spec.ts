import { TestBed } from '@angular/core/testing';
import { TestComponent } from './test.component';
describe('TestComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
        declarations: [TestComponent]
    }));
    it('should create the app', () => {
        const fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    it('should render title', () => {
        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.content span')?.textContent).toContain('angular-test-project app is running!');
    });
});
