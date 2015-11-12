//our root app component
import {Component} from 'angular2/angular2'
import {createStore} from './RxRedux'
import {counter} from './counter'

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <p class="example-component" (click)="dispatchFromStore()">{{text}}</p>
    <button (click)="increment()">+</button>
    <span>{{store | async}}</span>
    <button (click)="decrement()">-</button>
  `,

  styles:[`
    .example-component {font-weight:700;}
  `],

  directives: [],
  pipes: []
})

export class ExampleComponent {
  constructor() {
    this.text = 'Example Component!';
    this.store = createStore(counter, 0);
  }
  dispatchFromStore(){
    console.log('dispatchFromStore dispatching EXAMPLE');
    this.store.dispatch({type: 'EXAMPLE'})
  }
}
