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

export function initConfiguration(configService: ConfigService): Function {
    return () => configService.loadConfig();
}

@NgModule({
    declarations: [
        AppComponent,
        ServerStatusComponent,
        ServerComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        HttpClientModule
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
        ServerStatusService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
