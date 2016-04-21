import {Router, RouterConfiguration} from 'aurelia-router'
import 'jquery';
import "semantic-ui";

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'David Purkiss';
    config.map([
      { route: ['', 'landing'], name: 'landing',      moduleId: 'landing',      nav: true, title: 'Home' },
      { route: 'welcome', name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome', href:"#anchor-welcome" },
      { route: 'current-tech',         name: 'current-tech',        moduleId: 'current-tech',        nav: true, title: 'Current Tech', href:'#anchor-current-tech' },
      { route: 'skills',         name: 'skills',        moduleId: 'skills',        nav: true, title: 'Skills', href:'#anchor-skills' },
      // { route: 'current-interests',         name: 'current-interests',        moduleId: 'current-interests',        nav: true, title: 'Current Interests', href:'#anchor-current-interests' },
      // { route: 'bedside-reading',         name: 'bedside-reading',        moduleId: 'bedside-reading',        nav: true, title: 'Bedside Reading', href:'#anchor-bedside-reading' },
    ]);

    this.router = router;
  }
  
  attached() {
     // fix menu when passed
     
      (<any>$('.masthead'))
        .visibility({
          once: false,
          onBottomPassed: function() {
            (<any>$('.fixed.menu')).transition('fade in');
          },
          onBottomPassedReverse: function() {
            (<any>$('.fixed.menu')).transition('fade out');
          }
        })
      ;

      // create sidebar and attach to menu open
      (<any>$('.ui.sidebar'))
        .sidebar('attach events', '.toc.item')
      ;
  }
}
