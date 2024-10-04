import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { contributionService } from "../../services/apiServices/contributionService";
import { ContributionActionType } from "../actions/actions.constants";
import {
  addMayContributions,
  contributionAdd,
  contributionError,
  contributionLoading,
} from "../reducers/contribution.reducer";

function* createContributionSaga(action: any): any {
  const { event_id, amount } = action.payload;
  try {
    const response = yield call(contributionService.createContribution, {
      amount,
      event_id,
    });
    yield put(contributionAdd(response.data));
    toast.success("Successfully Contributed");
  } catch (e: any) {
    yield put(contributionError(e.message));
    toast.error(e.message);
  }
}

function* fetchContributionSaga(action: any): any {
  const fetchType = action.payload;
  try {
    yield put(contributionLoading({ loading: true }));
    const response = yield call(
      contributionService.fetchContributions,
      fetchType
    );
    yield put(addMayContributions(response.data));
    yield put(contributionLoading({ loading: false }));
  } catch (e: any) {
    yield put(contributionLoading({ loading: false }));
    yield put(contributionError(e.message));
  }
}

export function* contributionSagaWatcher() {
  yield all([
    takeLatest(
      ContributionActionType.CREATE_CONTRIBUTION,
      createContributionSaga
    ),
    takeLatest(
      ContributionActionType.FETCH_CONTRIBUTION,
      fetchContributionSaga
    ),
  ]);
}
