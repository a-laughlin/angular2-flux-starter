import {BehaviorSubject} from '@reactivex/rxjs/dist/cjs/Rx' // why does this work when there are no cjs files?
// import * as rxall from 'rx.all'
// import * as reedux from 'redux'

export const createStore = (reducer, initialState) => {
  // console.log('rx.BehaviorSubject', rx.BehaviorSubject);
  console.log('BehaviorSubject', BehaviorSubject);

  let subject = new BehaviorSubject(initialState);

  // console.log('redux', reedux);
  // console.log('rxall', rxall);
  console.log('subject', subject);

  let store = subject.scan(reducer);

  store.dispatch = subject.next;
  return store;

}
