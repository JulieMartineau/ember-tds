import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params/*, hash*/) {
  let [value,symbole]=params;
  switch (value){
    default :
      return value + ',00 ' +symbole;
  }
});
