import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverID=10;
  serverStatus='online';
  allowNewServer=true;
  serverCreationStatus='No Server Created'
  testServer = true;
  constructor() { }

  ngOnInit(): void {
  }

  getServerStatus() {
    return 'serverStatus: ' + this.serverStatus;
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
  }

}
