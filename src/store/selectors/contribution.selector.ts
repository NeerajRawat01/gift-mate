import { createSelector } from "reselect";
import { AppState } from "../index";

const contributionStore = (store: AppState) => store.contribution;

export const allContributions = createSelector(
  [contributionStore],
  (contribution) => {
    const contributionData = contribution.entities ?? {};
    if (contribution.ids) {
      return contribution.ids.map((id) => contributionData[id]); // TODO: add invitation type
    }
    return [];
  }
);

export const contributionLoading = createSelector(
  [contributionStore],
  (c) => c.loading
);
