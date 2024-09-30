import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { contributionService } from "../../services/apiServices/contributionService";
import { ContributionActionType } from "../actions/actions.constants";
import {
  addMayContributions,
  contributionError,
  contributionLoading,
} from "../reducers/contribution.reducer";

function* createContributionSaga(action: any): any {
  const { event_id, amount } = action.payload;
  try {
    yield call(contributionService.createContribution, { amount, event_id});
    toast.success("Successfully Contributed");
  } catch (e: any) {
    toast.error(e.message);
  }
}

function* fetchContributionSaga(): any {
  try {
    yield put(contributionLoading({ loading: true }));
    const response = yield call(contributionService.fetchContributions);
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
