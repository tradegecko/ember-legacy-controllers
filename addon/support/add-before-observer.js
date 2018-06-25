import Ember from 'ember';
import beforeEvent from './before-event';

function _addBeforeObserver(obj, path, target, method) {
  Ember.addListener(obj, beforeEvent(path), target, method);
  Ember.watch(obj, path);

  return this;
}
