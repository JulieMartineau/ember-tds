import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params/*, hash*/) {
  const [items, value,prop] = params;
  let id=prop ||'id' //si pas d'argument passé ajout automatique de id
  return items.filterBy(id,value).length > 0; //retourne les items filtré par id et value avec une taille sup à 0;
});
