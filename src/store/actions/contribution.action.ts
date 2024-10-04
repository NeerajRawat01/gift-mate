import { ContributionActionType } from "./actions.constants";

export const createContributionAction = (payload: {
  amount: number;
  event_id: number;
}) => ({
  type: ContributionActionType.CREATE_CONTRIBUTION,
  payload,
});

export const fetchContributionAction = (
  payload: "my_contributions" | "received_contributions"
) => ({
  type: ContributionActionType.FETCH_CONTRIBUTION,
  payload,
});
