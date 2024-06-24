import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionsPage } from './versions.page';

describe('VersionPageComponent', () => {
  let component: VersionsPage;
  let fixture: ComponentFixture<VersionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersionsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
