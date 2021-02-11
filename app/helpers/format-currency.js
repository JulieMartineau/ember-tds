import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params/*, hash*/) {
  let [value,symbole]=params;
  symbole = symbole ||'€';
  switch (value){
    default :
      return value + ',00 ' +symbole;
  }
});
