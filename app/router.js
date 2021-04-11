import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('Abstractroute');
  this.route('board');
  this.route('order', { path: 'order/:order_id' });
  this.route('sections', function() {
    this.route('add');
    this.route('addProduct');
    this.route('edit', { path: 'edit/:section_id'},function (){
      this.route('addProduct');
    });
  });
  this.route('myOrders', function() {
    this.route('prepare', { path: 'prepare:order_id'}, function() {
      this.route('cancel');
      this.route('prepared');
    });
  });
});
