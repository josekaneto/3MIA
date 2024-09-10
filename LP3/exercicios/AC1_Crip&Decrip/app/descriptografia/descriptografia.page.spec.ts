import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescriptografiaPage } from './descriptografia.page';

describe('DescriptografiaPage', () => {
  let component: DescriptografiaPage;
  let fixture: ComponentFixture<DescriptografiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptografiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
