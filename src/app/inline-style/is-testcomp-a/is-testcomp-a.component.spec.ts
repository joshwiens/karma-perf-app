import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { IsChildcompAComponent } from './is-childcomp-a/is-childcomp-a.component';
import { IsTestcompAComponent } from './is-testcomp-a.component';

describe('Component: IsTestcompAComponent', () => {
  let component: IsTestcompAComponent;
  let fixture: ComponentFixture<IsTestcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompAComponent, IsChildcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should project the title', () => {
      expect(fixture.debugElement.query(By.css('kwp-is-childcomp-a'))
        .query(By.css('h1')).nativeElement.innerHTML).toContain('Test Component Title');
  });

  it('Should project the body', () => {
      expect(fixture.debugElement.query(By.css('kwp-is-childcomp-a'))
        .query(By.css('div')).nativeElement.innerHTML).toContain('Test Component Body');
  });
});
