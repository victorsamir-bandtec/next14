export type UserType = {
  participantId: string;
  participantUid: string;
  campaignId: string;
  token: string;
};

export type UserActions = {
  setUser: (user: UserType) => void;
};
