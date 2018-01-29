import {Injectable} from '@angular/core';
import {BaseService} from "../base/base.service";
import {ConfigService} from "../config/config.service";
import {InstagramAccessTokenReqDataModel} from "../../components/instagram-access-token/instagram-access-token.component";

@Injectable()
export class InstagramService extends BaseService {
    instagramUrl: string;

    constructor(protected configService: ConfigService) {
        super(configService);
        this.instagramUrl = this.configService.get()["INSTAGRAM_ENDPOINT"];
    }

    auth(authData: InstagramAccessTokenReqDataModel) {
        let responseTypeData = 'token';
        let scopesPathData = 'likes+public_content';

        let aup = {
            rootPath: this.instagramUrl,
            oauthPath: '/oauth/authorize/',
            clientIdPath: '?client_id=' + authData.clientId,
            redirectUriPath: '&redirect_uri=' + authData.redirectUri,
            responsePath: '&response_type=' + responseTypeData,
            scopesPath: '&scope=' + scopesPathData
        };

        let instagramAuthFullUrl = aup.rootPath + aup.oauthPath + aup.clientIdPath + aup.redirectUriPath + aup.responsePath + aup.scopesPath;
        window.location.href = instagramAuthFullUrl;
    }
}
