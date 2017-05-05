import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ItTestcompBComponent } from './it-testcomp-b.component';

describe('Component: ItTestcompBComponent', () => {
  let component: ItTestcompBComponent;
  let fixture: ComponentFixture<ItTestcompBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItTestcompBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTestcompBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have the DOM element if boolean is set to false', () => {
    const containerElement = fixture.debugElement.query(By.css('.container'));
    expect(containerElement).toBeNull();
  });

  it('should have the DOM element if boolean is set to true', () => {
    component.isVisible = true;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const containerElement = fixture.debugElement.query(By.css('.container'));
      expect(containerElement).not.toBeNull();
    });
  });

  it('clicking the button should toggle visiblity', async(() => {
    const button = fixture.debugElement.query(By.css('button'));

    expect(fixture.debugElement.query(By.css('.container'))).toBeNull();

    button.triggerEventHandler('click', <Event>{});
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.container'))).not.toBeNull();

    button.triggerEventHandler('click', <Event>{});
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.container'))).toBeNull();
  }));
});
