import Controller from '@ember/controller';
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';

export default class Step1Controller extends Controller {
  dispoItems=[];
  includedItems=[];
  @tracked dispoItems_ = [];
  @tracked includedItems_ = [];
  @action changeDispo(elements){
    this.dispoItems_ = elements;
    //Affecte elements à dispoItems_, action déclenchée sur le @onChange de la liste des dispoItems
  }
  @action changeIncluded(elements){
    this.includedItems_ = elements;
    //Affecte elements à includedItems_, action déclenchée sur le @onChange de la liste des includedItems
  }
}
