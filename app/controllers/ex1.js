import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = '';
  MAX = 100;
  get size() {
    return this.MAX - this.content.length;
  }

  get style() {
    return
  }
  @tracked info;

  @action
  save() {
    console.log('save');
  }
  @action
  clear() {
    console.log('clear');
  }
  @action
  update() {
    console.log('update');
  }
}
