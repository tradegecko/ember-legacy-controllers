import Ember from 'ember';

function beforeEvent(keyName) {
  return keyName + BEFORE_OBSERVERS;
}

export default function suspendBeforeObservers(obj, paths, target, method, callback) {
  var events = paths.map(beforeEvent);
  debugger
  return Ember._suspendListeners(obj, events, target, method, callback);
}
