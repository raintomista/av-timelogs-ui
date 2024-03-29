import { AuthenticationService } from './../../services/authentication.service';
import { NetworkService } from './../../services/network.service';
import { Component } from '@angular/core';
declare var $: any;

@Component({
   selector: 'app-dashboard',
   templateUrl: './dashboard.component.html',
   styleUrls: ['./dashboard.component.css'],
   providers: [NetworkService, AuthenticationService]
})
export class DashboardComponent {

   constructor(private networkService: NetworkService, private authService: AuthenticationService) { }

   ngAfterViewInit() {
      this.checkNetwork();
      $('.ui.dropdown').dropdown();
      $('a.sidebar-toggle').click(function () {
         $('#sidebar').sidebar('toggle')
      })
      $('#sidebar a.item.link').click(function () {
         $('#sidebar').sidebar('toggle')
      })
   }

   checkNetwork() {
      this.networkService.getIPAddress().subscribe(network => {
         localStorage.setItem('currentIP', network.ip); //Get Current IP Address
      });
   }
}
