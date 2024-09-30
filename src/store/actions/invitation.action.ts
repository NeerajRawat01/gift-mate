import { InvitationActionType } from "./actions.constants";

export const sendInviteAction = (payload: {
  email: string;
  message: string;
  eventId: number;
}) => ({
  type: InvitationActionType.SEND_INVITE,
  payload,
});

export const fetchInvitationAction = () => ({
  type: InvitationActionType.FETCH_INVITATION,
});
