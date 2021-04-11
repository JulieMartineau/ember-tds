import Controller from '@ember/controller';
import groupBy from 'ember-group-by';

export default class ProductsController extends Controller {
  @groupBy('model.products', 'sectionName') sections;
}
