import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {AppComponent} from './app.component';
import {ServerStatusComponent} from './components/server-status/server-status.component';
import {RoutingModule} from "./modules/routing/routing.module";
import {ServerComponent} from './components/server/server.component';
import {ConfigService} from "./services/config/config.service";
import {HttpClientModule} from "@angular/common/http";
import {ServerStatusService} from "./services/server-status/server-status.service";
import {BaseService} from "./services/base/base.service";
import {TopToolbarComponent} from './components/top-toolbar/top-toolbar.component';
import {InstagramComponent} from './components/instagram/instagram.component';
import {InstagramAccessTokenComponent} from './components/instagram-access-token/instagram-access-token.component';
import {InstagramService} from "./services/instagram/instagram.service";
import {ReactiveFormsModule} from "@angular/forms";

export function initConfiguration(configService: ConfigService): Function {
    return () => configService.loadConfig();
}

@NgModule({
    declarations: [
        AppComponent,
        ServerStatusComponent,
        ServerComponent,
        TopToolbarComponent,
        InstagramComponent,
        InstagramAccessTokenComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [
        BaseService,
        ConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: initConfiguration,
            deps: [ConfigService],
            multi: true
        },
        ServerStatusService,
        InstagramService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
