import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Assignments } from './assignments';
import { AuthService } from '../../service/auth-service';
import { authServiceStub } from '../../testing/auth-service.stub';

describe('Assignments', () => {
    let fixture: ComponentFixture<Assignments>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Assignments],
            providers: [{ provide: AuthService, useValue: authServiceStub }],
        }).compileComponents();
        fixture = TestBed.createComponent(Assignments);
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });
});
