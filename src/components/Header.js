import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../actions';

const Header = () => {
  const theme = useSelector((state) => state.toggle);

  const dispatch = useDispatch();
  return (
    <header
      className={`${theme} w-full font-sans flex justify-around sticky top-0`}
    >
      <div className="">CryptoStats</div>
      <div>About Us</div>
      <button
        name="button"
        onClick={() => dispatch(toggleTheme(theme))}
        type="button"
      >
        Change Theme
      </button>
    </header>
  );
};
export default Header;
