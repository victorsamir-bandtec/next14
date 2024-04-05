import { UserActions, UserType } from '@/@types/users';
import { create } from 'zustand';

type StoreProps = {
  user: UserType;
  actions: UserActions;
};

export const useUsersStore = create<StoreProps>((set) => ({
  user: {
    token: '',
    campaignId: '',
    participantId: '',
    participantUid: '',
  },

  actions: {
    setUser: (user) => set(() => ({ user })),
  },
}));
