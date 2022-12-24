import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentAccount } from 'redux/features/account-slice';

export const useAccount = () => {
  const account = useSelector(selectCurrentAccount);

  return useMemo(() => ({ account }), [account]);
};
