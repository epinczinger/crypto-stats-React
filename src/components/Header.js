import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleTheme } from '../actions';

const Header = () => {
  const theme = useSelector((state) => state.toggle);

  const dispatch = useDispatch();
  return (
    <header
      className={`${theme} shadow-lg py-3 mb-2 box-border w-full font-sans flex justify-between px-4 sticky top-0`}
    >
      <div className="flex">
        <div className="py-2 font-semibold"><Link to="/">CryptoStats</Link></div>
        <div className="py-2 pl-4 hidden sm:block">About Us</div>
      </div>
      <button
        name="button"
        className={`${theme} py-2 px-4 border-yellow-500 border font-semibold rounded`}
        onClick={() => dispatch(toggleTheme(theme))}
        type="button"
      >
        Change Theme
      </button>
    </header>
  );
};
export default Header;
