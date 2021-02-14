import { reactive } from '@vue/composition-api';
import { sharedUserStore } from '@/store/shared-user';

export const useSharedEvents = () => {
  const sharedEventState = reactive({
    sharedUsers: sharedUserStore.sharedUsers,
  });

  const getDisplayUserIds = () => {
    return sharedEventState.sharedUsers
      .filter(user => user.display)
      .map(user => user.userId);
  };

  return { sharedEventState, getDisplayUserIds };
};
