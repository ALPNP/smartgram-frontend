import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ServerStatusComponent} from "../../components/server-status/server-status.component";
import {ServerComponent} from "../../components/server/server.component";

const serverRoutes: Routes = [
    {path: 'serverStatus', component: ServerStatusComponent}
];

const appRoutes: Routes = [
    {
        path: 'server',
        component: ServerComponent,
        children: serverRoutes
    },
    {
        path: '',
        redirectTo: 'server',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'server'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {
}
