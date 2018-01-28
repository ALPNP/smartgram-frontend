import {Injectable} from '@angular/core';
import {ConfigService} from "../config/config.service";

@Injectable()
export class BaseService {
    apiUrl: string;

    constructor(protected configService: ConfigService) {
        this.apiUrl = null;
        this.apiUrl = configService.get()["API_ENDPOINT"];
    }

}
