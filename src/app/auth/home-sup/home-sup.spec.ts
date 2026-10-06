import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSup } from './home-sup';
import { AuthService } from '../../service/auth-service';
import { authServiceStub } from '../../testing/auth-service.stub';

describe('HomeSup', () => {
    let component: HomeSup;
    let fixture: ComponentFixture<HomeSup>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeSup],
            providers: [{ provide: AuthService, useValue: authServiceStub }],
        }).compileComponents();

        fixture = TestBed.createComponent(HomeSup);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
