import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { customMatchers } from '../../shared/utils/custom-matchers';

import { LmTestcompDComponent } from './lm-testcomp-d.component';

describe('Component: LmTestcompDComponent', () => {
  let component: LmTestcompDComponent;
  let fixture: ComponentFixture<LmTestcompDComponent>;

  beforeEach(async(() => {
    jasmine.addMatchers(customMatchers);

    TestBed.configureTestingModule({
      declarations: [ LmTestcompDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestcompDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should correctly set the background style', () => {
      expect(fixture.debugElement.children[0].nativeElement).toHaveCssStyle({ 'background-color': 'red'});
  });
});
