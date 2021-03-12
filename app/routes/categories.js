import Route from '@ember/routing/route';

export default class CategoriesRoute extends Route {
 model(){
   return this.store.findAll('category');
 }
  afterModel(model){
    if (model.length == 1) {
      this.transitionTo('categories', model.get('firstObject'));
    }
  }
}
