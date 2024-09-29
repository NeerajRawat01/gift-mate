import { invitationActionType } from "./actions.constants";

export const sendInviteAction = (payload: {
  email: string;
  message: string;
  eventId: number;
}) => ({
  type: invitationActionType.SEND_INVITE,
  payload,
});

export const fetchInvitationAction = () => ({
  type: invitationActionType.FETCH_INVITATION,
});
