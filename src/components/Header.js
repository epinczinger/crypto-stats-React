import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleTheme } from '../actions';

const Header = () => {
  const theme = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(toggleTheme(theme));
    const body = document.querySelector('body');
    body.classList.remove(...body.classList);
    body.classList = theme;
  };
  return (
    <header className="dark:bg-gray-800 dark:text-gray-100 bg-gray-200 box-border shadow-lg h15 py-3 box-border w-full font-sans flex justify-between px-4 sticky top-0">
      <div className="flex">
        <div className="py-2 flex items-center font-semibold hover:text-gray-900 dark:hover:text-yellow-400">
          <Link to="/">CryptoStats</Link>
        </div>
        <div className="py-2 pl-4 hidden sm:flex items-center hover:text-gray-900 dark:hover:text-yellow-400">
          <Link to="/about">About Us</Link>
        </div>
      </div>
      <button
        name="button"
        className=" dark:hover:text-yellow-400 py-2 px-4 border-yellow-500 flex items-center border font-semibold rounded"
        onClick={changeTheme}
        type="button"
      >
        Change Theme
      </button>
    </header>
  );
};
export default Header;
