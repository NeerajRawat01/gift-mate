import { createSelector } from "reselect";
import { AppState } from "../index";

const invitationStore = (store: AppState) => store.invitation;

export const allInvitations = createSelector(
  [invitationStore],
  (invitation) => {
    const invitationData = invitation.entities ?? {};
    if (invitation.ids) {
      return invitation.ids.map((id) => invitationData[id]); // TODO: add invitation type
    }
    return [];
  }
);

export const invitationLoading = createSelector(
  [invitationStore],
  (invitation) => invitation.loading
);
