import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AlChildcompAComponent } from './al-childcomp-a/al-childcomp-a.component';
import { AlTestcompAComponent } from './al-testcomp-a.component';

describe('Component: AlTestcompAComponent', () => {
  let component: AlTestcompAComponent;
  let fixture: ComponentFixture<AlTestcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompAComponent, AlChildcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should project the title', () => {
      expect(fixture.debugElement.query(By.css('kwp-al-childcomp-a'))
        .query(By.css('h1')).nativeElement.innerHTML).toContain('Test Component Title');
  });

  it('Should project the body', () => {
      expect(fixture.debugElement.query(By.css('kwp-al-childcomp-a'))
        .query(By.css('div')).nativeElement.innerHTML).toContain('Test Component Body');
  });
});
