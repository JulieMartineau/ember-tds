import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsIndexRoute extends Route {
  model(){
    return this.store.findAll('section', {include: "products"});
  }

  async deleteProducts(products) {
    while (products.firstObject) {
      let p = products.firstObject;
      await p.destroyRecord();
    }
  }
  @action delete(section) {
    this.deleteProducts(section.products).then(() => {
      section.destroyRecord();
    });
  }
}
