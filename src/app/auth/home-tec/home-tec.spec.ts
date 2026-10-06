import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTec } from './home-tec';

describe('HomeTec', () => {
    let component: HomeTec;
    let fixture: ComponentFixture<HomeTec>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeTec],
        }).compileComponents();

        fixture = TestBed.createComponent(HomeTec);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
