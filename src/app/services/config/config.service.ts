import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ConfigService {
    config: any;

    constructor(protected httpClient: HttpClient) {
        this.config = null;
    }

    loadConfig() {
        this.httpClient.get('./config.json').subscribe(
            data => {
                this.config = data;
            },
            err => {
                alert(err);
                console.error(err);
            }
        )
    }

    public get() {
        return this.config;
    }
}
