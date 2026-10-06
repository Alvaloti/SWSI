import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Area } from './area';
import { AuthService } from '../../service/auth-service';
import { authServiceStub } from '../../testing/auth-service.stub';

describe('Area', () => {
    let component: Area;
    let fixture: ComponentFixture<Area>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Area],
            providers: [{ provide: AuthService, useValue: authServiceStub }],
        }).compileComponents();

        fixture = TestBed.createComponent(Area);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
