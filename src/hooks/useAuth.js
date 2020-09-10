import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useAuth = (props) => {
  const currentUser = useSelector((state) => state.currentUser);
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push(history.location.pathname);
      console.log(history);
    } else {
      history.push('/');
    }
  }, [currentUser]);

  return currentUser;
};

export default useAuth;
