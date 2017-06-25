import { Component, OnInit } from '@angular/core';
import { NetworkService } from './../../../../services/network.service';

@Component({
  selector: 'network-monitor-table',
  templateUrl: './network-monitor-table.component.html',
  styleUrls: ['./network-monitor-table.component.css'],
  providers: [NetworkService]
})
export class NetworkMonitorTableComponent implements OnInit {
  networks: Object[];

  constructor(private networkService: NetworkService) {
    this.networkService.getNetworks().subscribe(result =>{
      this.networks = result.data;
    });  
  }

  ngOnInit() {
  }

}