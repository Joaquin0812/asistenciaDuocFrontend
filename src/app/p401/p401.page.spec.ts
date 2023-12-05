import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P401Page } from './p401.page';
import { waitForAsync } from '@angular/core/testing';

describe('P401Page', () => {
  let component: P401Page;
  let fixture: ComponentFixture<P401Page>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(P401Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
