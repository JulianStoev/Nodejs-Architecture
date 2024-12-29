import { ErrorEvents } from '../events/Error.event';
import { EventEmitter } from 'node:events';

export const eventEmitter = new EventEmitter();

export default function EventsStartup(): void {

    // handle error events
    ErrorEvents(eventEmitter);

}