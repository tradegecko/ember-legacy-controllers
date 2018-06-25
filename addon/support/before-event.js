var BEFORE_OBSERVERS = ':before';

export default function beforeEvent(keyName) {
  return keyName + BEFORE_OBSERVERS;
}
