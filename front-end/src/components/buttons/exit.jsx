import React from 'react';
import {
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

export default function Exit() {
  const history = useHistory();
  const getOut = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <button type="button" onClick={ getOut }>
      <FontAwesomeIcon icon={ faArrowRightFromBracket } />
    </button>
  );
}
