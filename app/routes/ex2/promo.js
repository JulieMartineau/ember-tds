import Route from '@ember/routing/route';
import Services from "../../classes/services";
import { promos } from 'tds/data/datas';

export default class Ex2PromoRoute extends Route {
  model() {
    return new Services(promos);
  }
}
