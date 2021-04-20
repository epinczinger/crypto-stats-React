import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const theme = useSelector((state) => state.toggle);
  return (
    <header className={`${theme} w-full font-sans flex justify-around sticky top-0`}>
      <div className="">CryptoStats</div>
      <div>MenuIcon</div>
    </header>
  );
};
export default Header;
