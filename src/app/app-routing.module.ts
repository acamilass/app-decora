import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

    {
        path: '',
        loadChildren: './home/home.module#HomeModule',
        canActivate: [AuthGuard]
    },

    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },

    {
        path: 'admin',
        loadChildren: './cadastro/cadastro.module#CadastroModule'
    },

    // {
    //     path: 'cadastro',
    //     loadChildren: './cadastro/cadastro.module#CadastroModule'
    // },

    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }