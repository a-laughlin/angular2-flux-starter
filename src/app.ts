//our root app component
import {Component, View} from 'angular2/angular2'
import {createStore} from './RxRedux'
import {counter} from './counter'

@Component({
  selector: 'my-app',
  providers: []
  template: `
    <div>
      <h2>Hello Angular2!</h2>
      <button (click)="increment()">+</button>
      <span>{{store | async}}</span>
      <button (click)="decrement()">-</button>
    </div>
  `,
  directives: [],
  pipes: []
})
export class App {
  constructor() {
    this.store = createStore(counter, 0);
  }
  increment(){
    this.store.dispatch({type: 'INCREMENT'})
  }
  decrement(){
    this.store.dispatch({type: 'DECREMENT'})
  }

}
