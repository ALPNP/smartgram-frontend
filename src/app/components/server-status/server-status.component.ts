import {Component, OnInit} from '@angular/core';
import {ServerStatusService} from "../../services/server-status/server-status.service";

@Component({
    selector: 'sg-server-status',
    templateUrl: 'server-status.component.html',
    styleUrls: ['server-status.component.scss'],
    providers: [ServerStatusService]
})
export class ServerStatusComponent implements OnInit {
    serverStatus: any;

    constructor(private sss: ServerStatusService) {
        this.serverStatus = {};
    }

    ngOnInit() {
        this.checkServer();
    }

    checkServer() {
        this.sss.checkServerStatus().subscribe(
            data => {
                this.serverStatus = data;
            },
            err => {
                console.error(err);
            }
        )
    }

}
