import Ember from 'ember';

const { Mixin } = Ember;

export default Mixin.create({
  init() {
    this._super(...arguments);
    let registerAPI = this.get('registerAPI');
    if (registerAPI) {
      registerAPI(this.getParentAPI());
    }
  },

  getParentAPI() {
    return {};
  }
});
