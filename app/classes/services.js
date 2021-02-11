import { computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class Services{
  services=[];
  //codes promos chargés
  promo={};
  //code saisi par le user
  @tracked codePromo;

  constructor(services) {
    this.services=services;
  }
  @computed('services.@each.active')
  get countActive(){
    /*let r=0;
  this.services.forEach(s=>{
    if(s.active){
      r++;
    }
    return r;*/
   return this.services.filter((s)=>s.active).length;
  };

  get sumActive(){
    let services=this.services.filterBy('active',true);
    let r=0;
    services.forEach(s=>{
      r+=s.price;
    })
      return r;
  }
  get promoTx(){
    return this.promos[this.codePromo]||'code invalide';
  }
  get montantPromo(){
    return this.promoTx*this.sumActive;
  }
}
