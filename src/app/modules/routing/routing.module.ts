import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ServerStatusComponent} from "../../components/server-status/server-status.component";
import {ServerComponent} from "../../components/server/server.component";
import {InstagramAccessTokenComponent} from "../../components/instagram-access-token/instagram-access-token.component";
import {InstagramComponent} from "../../components/instagram/instagram.component";

const serverRoutes: Routes = [
    {path: 'serverStatus', component: ServerStatusComponent}
];

const instagramRoutes: Routes = [
    {path: 'accessToken', component: InstagramAccessTokenComponent}
];

const appRoutes: Routes = [
    {
        path: 'server',
        component: ServerComponent,
        children: serverRoutes
    },
    {
        path: 'instagram',
        component: InstagramComponent,
        children: instagramRoutes
    },
    // {
    //     path: '',
    //     redirectTo: 'server',
    //     pathMatch: 'full'
    // },
    {
        path: '**',
        redirectTo: ''
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
