import { Component } from '@angular/core';
import {
  Router, NavigationStart, NavigationEnd,
  NavigationCancel, NavigationError, Event
} from '@angular/router';
import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Allconsepts';
  currentUser: any;
  showLoadingIndicator: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.router.events.subscribe((RouterEvent: Event) => {
       setTimeout(()=>{
      },1400)
        if (RouterEvent instanceof NavigationStart) {
          console.log("test");
          this.showLoadingIndicator = true;
        }

      // On NavigationEnd or NavigationError or NavigationCancel


      if (RouterEvent instanceof NavigationEnd ||
        RouterEvent instanceof NavigationError ||
        RouterEvent instanceof NavigationCancel) {
        this.showLoadingIndicator = false;
      }



    });

  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
