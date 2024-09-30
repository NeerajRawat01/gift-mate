import { Event } from "../../models/event";
import { EventActionType } from "./actions.constants";

export const createEventAction = (payload: Event) => ({
  type: EventActionType.CREATE_EVENT,
  payload,
});

export const fetchEventsAction = () => ({
  type: EventActionType.FETCH_EVENTS,
});

export const fetchEventById = (payload: number) => ({
  type: EventActionType.CREATE_EVENT,
  payload,
});
