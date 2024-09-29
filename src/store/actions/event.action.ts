import { Event } from "../../models/event";
import { eventActionType } from "./actions.constants";

export const createEventAction = (payload: Event) => ({
  type: eventActionType.CREATE_EVENT,
  payload,
});

export const fetchEventsAction = () => ({
  type: eventActionType.FETCH_EVENTS,
});
