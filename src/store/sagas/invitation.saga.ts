import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { invitationService } from "../../services/apiServices/invitationService";
import {
  InvitationActionType
} from "../actions/actions.constants";
import {
  addMayInvitations,
  invitationAdd,
  invitationError,
  invitationLoading,
} from "../reducers/invitation.reducer";

function* sendInviteSaga(action: any): any {
  const userDetails = action.payload;
  try {
    yield put(invitationLoading({ loading: true }));
    const response = yield call(invitationService.sendInvite, userDetails);
    yield put(invitationAdd(response.data));
    yield put(invitationLoading({ loading: false }));
    toast.success("Invitation sent successfully");
  } catch (e: any) {
    toast.error(e.message);
    yield put(invitationLoading({ loading: false }));
    yield put(invitationError(e.message));
  }
}

function* fetchInvitationSaga(): any {
  try {
    yield put(invitationLoading({ loading: true }));
    const response = yield call(invitationService.fetchInvitation);
    yield put(addMayInvitations(response.data));
    yield put(invitationLoading({ loading: false }));
  } catch (e: any) {
    yield put(invitationLoading({ loading: false }));
    yield put(invitationError(e.message));
  }
}

export function* invitationSagaWatcher() {
  yield all([
    takeLatest(InvitationActionType.SEND_INVITE, sendInviteSaga),
    InvitationActionType.FETCH_INVITATION,
    takeLatest(InvitationActionType.FETCH_INVITATION, fetchInvitationSaga),
  ]);
}
