import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ServerStatusComponent} from './components/server-status/server-status.component';
import {RoutingModule} from "./modules/routing/routing.module";
import {ServerComponent} from './components/server/server.component';

@NgModule({
    declarations: [
        AppComponent,
        ServerStatusComponent,
        ServerComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
