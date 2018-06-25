import Ember from 'ember';
import beforeEvent from './beforeEvent';

export default function suspendBeforeObservers(obj, paths, target, method, callback) {
  var events = paths.map(beforeEvent);
  return Ember._suspendListeners(obj, events, target, method, callback);
}
