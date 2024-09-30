import { all, call, put, takeLatest } from "redux-saga/effects";
import { eventService } from "../../services/apiServices/eventService";
import { eventActionType } from "../actions/actions.constants";
import {
  addMayEvents,
  eventAdd,
  eventError,
  eventLoading,
} from "../reducers/event.reducer";
import { toast } from "react-toastify";

function* createEventSaga(action: any): any {
  const eventData = action.payload;
  try {
    yield put(eventLoading({ loading: true }));
    const response = yield call(eventService.createEvent, eventData);
    yield put(eventAdd(response.data));
    yield put(eventLoading({ loading: false }));
    toast.success("Event created successfully");
  } catch (e: any) {
     yield put(eventLoading({ loading: false }));
    toast.error(e.message);
    yield put(eventError(e.message));
  }
}

function* fetchEventsSaga(): any {
  try {
    yield put(eventLoading({ loading: true }));
    const response = yield call(eventService.fetchEvents);
    yield put(addMayEvents(response.data));
    yield put(eventLoading({ loading: false }));
  } catch (e: any) {
     yield put(eventLoading({ loading: false }));
    yield put(eventError(e.message));
  }
}

export function* eventSagaWatcher() {
  yield all([
    takeLatest(eventActionType.CREATE_EVENT, createEventSaga),
    eventActionType.FETCH_EVENTS,
    takeLatest(eventActionType.FETCH_EVENTS, fetchEventsSaga),
  ]);
}
