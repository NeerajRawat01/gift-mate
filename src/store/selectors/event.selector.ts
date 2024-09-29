import { createSelector } from "reselect";
import { AppState } from "../index";

import { Event } from "../../models/event";

const eventStore = (store: AppState) => store.event;

export const allEvents = createSelector([eventStore], (events) => {
  const eventData = events.entities ?? {};
  if (events.ids) {
    return events.ids.map((id) => eventData[id] as Event);
  }
  return [];
});

export const eventsLoading = createSelector(
  [eventStore],
  (event) => event.loading
);
