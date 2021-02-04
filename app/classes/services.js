import { computed } from '@ember/object';
export default class Services{
  services=[];
  constructor(services) {
    this.services=services;
  }
  @computed('services.eachactive')
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

}
