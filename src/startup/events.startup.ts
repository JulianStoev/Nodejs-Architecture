import { errorEvents } from '../events/error.event';
import { EventEmitter } from 'node:events';

export const eventEmitter = new EventEmitter();

export default function EventsStartup(): void {

    // handle error events
    errorEvents(eventEmitter);

}