import {Route} from '@angular/router'
import {AuthGuard} from 'app/core/auth/guards/auth.guard'
import {NoAuthGuard} from 'app/core/auth/guards/noAuth.guard'
import {LayoutComponent} from 'app/layout/layout.component'
import {InitialDataResolver} from 'app/app.resolvers'

export const appRoutes: Route[] = [
    {path: '', pathMatch: 'full', redirectTo: 'dashboard'},

    {path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'dashboard'},

    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'confirmation-required',
                loadChildren: () =>
                    import(
                        'app/modules/auth/confirmation-required/confirmation-required.module'
                    ).then((m) => m.AuthConfirmationRequiredModule),
            },
            {
                path: 'forgot-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/forgot-password/forgot-password.module'
                    ).then((m) => m.AuthForgotPasswordModule),
            },
            {
                path: 'reset-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/reset-password/reset-password.module'
                    ).then((m) => m.AuthResetPasswordModule),
            },
            {
                path: 'sign-in',
                loadChildren: () =>
                    import('app/modules/auth/sign-in/sign-in.module').then(
                        (m) => m.AuthSignInModule,
                    ),
            },
            {
                path: 'sign-up',
                loadChildren: () =>
                    import('app/modules/auth/sign-up/sign-up.module').then(
                        (m) => m.AuthSignUpModule,
                    ),
            },
        ],
    },

    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'sign-out',
                loadChildren: () =>
                    import('app/modules/auth/sign-out/sign-out.module').then(
                        (m) => m.AuthSignOutModule,
                    ),
            },
            {
                path: 'unlock-session',
                loadChildren: () =>
                    import(
                        'app/modules/auth/unlock-session/unlock-session.module'
                    ).then((m) => m.AuthUnlockSessionModule),
            },
        ],
    },

    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('app/modules/landing/home/home.module').then(
                        (m) => m.LandingHomeModule,
                    ),
            },
        ],
    },

    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            {
                path: 'example',
                loadChildren: () =>
                    import('app/modules/admin/example/example.module').then(
                        (m) => m.ExampleModule,
                    ),
            },
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('app/modules/admin/dashboard/dashboard.module').then(
                        (module) => module.DashboardModule,
                    ),
            },
            {
                path: 'students',
                loadChildren: () =>
                    import('app/modules/admin/students/students.module').then(
                        (module) => module.StudentsModule,
                    ),
            },
            {
                path: 'survey',
                loadChildren: () =>
                    import('app/modules/admin/survey/survey.module').then(
                        (module) => module.SurveyModule,
                    ),
            },
            {
                path: 'guidance-request',
                loadChildren: () =>
                    import(
                        'app/modules/admin/guidance-request/guidance-request.module'
                    ).then((module) => module.GuidanceRequestModule),
            },
            {
                path: 'implicit-ratings',
                loadChildren: () =>
                    import(
                        'app/modules/admin/implicit-rating/implicit-rating.module'
                    ).then((module) => module.ImplicitRatingModule),
            },
        ],
    },
]
