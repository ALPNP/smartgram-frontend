import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {InstagramService} from "../../services/instagram/instagram.service";

export class InstagramAccessTokenReqDataModel {
    clientId: string;
    redirectUri: string;

    constructor() {
        this.clientId = 'c6ff85ea1b3d4c9aa96707f4c6196217';
        this.redirectUri = 'http://localhost:8080/instagram/accessToken/';
    }
}

@Component({
    selector: 'sg-instagram-access-token',
    templateUrl: 'instagram-access-token.component.html',
    styleUrls: ['instagram-access-token.component.scss'],
    providers: [InstagramService]
})
export class InstagramAccessTokenComponent implements OnInit {
    accessTokenReqDataForm: FormGroup;
    formModel: InstagramAccessTokenReqDataModel;

    constructor(private fb: FormBuilder, private instagramService: InstagramService) {
        this.formModel = new InstagramAccessTokenReqDataModel();
    }

    ngOnInit() {
        this.initAccessTokenReqDataForm();
    }

    initAccessTokenReqDataForm() {
        this.accessTokenReqDataForm = this.fb.group({
            clientId: ['', Validators.required],
            redirectUri: ['', Validators.required]
        });
    }

    submitForm() {
        this.instagramService.auth(this.formModel);
    }
}
