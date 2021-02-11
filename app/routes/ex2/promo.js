import Route from '@ember/routing/route';
import { promos } from 'tds/data/datas';

export default class Ex2PromoRoute extends Route {
  model() {
    return this.modelFor('ex2');
  }

  afterModel(model){ //modifie le modèle une fois qu'il est correctement chargé
    model.promos=promos;
  }

}
