import {Injectable} from '@angular/core';
import {BaseService} from "../base/base.service";
import {ConfigService} from "../config/config.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';

@Injectable()
export class ServerStatusService extends BaseService {
    restUrl: string;

    constructor(protected configService: ConfigService,
                protected httpClient: HttpClient) {
        super(configService);
        this.restUrl = '/api/checkService/';
    }

    checkServerStatus() {
        return this.httpClient.get(`${this.apiUrl}${this.restUrl}`)
            .map((res) => {
                return res;
            })
            .catch((err: any) => {
                return Observable.throw(err);
            });
    }
}
