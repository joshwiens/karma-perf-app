import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { customMatchers } from '../../shared/utils/custom-matchers';

import { IsTestcompDComponent } from './is-testcomp-d.component';

describe('Component: IsTestcompDComponent', () => {
  let component: IsTestcompDComponent;
  let fixture: ComponentFixture<IsTestcompDComponent>;

  beforeEach(async(() => {
    jasmine.addMatchers(customMatchers);

    TestBed.configureTestingModule({
      declarations: [ IsTestcompDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompDComponent);
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
