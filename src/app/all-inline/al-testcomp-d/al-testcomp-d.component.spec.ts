import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { customMatchers } from '../../shared/utils/custom-matchers';

import { AlTestcompDComponent } from './al-testcomp-d.component';

describe('Component: AlTestcompDComponent', () => {
  let component: AlTestcompDComponent;
  let fixture: ComponentFixture<AlTestcompDComponent>;

  beforeEach(async(() => {
    jasmine.addMatchers(customMatchers);

    TestBed.configureTestingModule({
      declarations: [ AlTestcompDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompDComponent);
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
