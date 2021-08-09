import { SimpleEventDispatcher } from 'ste-simple-events';
import { MyEvent } from './MyEvent';

const dispatcher = new SimpleEventDispatcher<MyEvent>();

dispatcher.subscribe((e) => console.log(`the flag is ${e.flag}`));

setInterval(() => dispatcher.dispatch(new MyEvent(Math.random() > 0.5)), 1000);