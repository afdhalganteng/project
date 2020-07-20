import { Routes } from '@angular/router';

export const MODULE_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('src/app/module/home-module/home-module.module').then(
                m => m.HomeModuleModule
            ),
    },
]