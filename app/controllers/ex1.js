import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = '';
  @tracked info = '';
  MAX = 100;
  get size() {
    return this.MAX - this.content.length;
  }

  // eslint-disable-next-line getter-return
  get style() {
    if (this.content.length <= 50) {
      return 'alert-info';
    }
    if (this.content.length > 50 && this.content.length < 80) {
      return 'alert-warning';
    }
    if (this.content.length >= 80) {
      return 'alert-danger';
    }
  }
  @tracked info;

  @action
  save() {
    this.info = 'Note modifié';
  }
  @action
  clear() {
    this.content = '';
    this.info = '';
  }
  @action
  update() {
    console.log('update');
  }
}
