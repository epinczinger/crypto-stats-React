import React from 'react';

const AboutUs = () => (
  <div className="h60">
    <h1 className="pt-20 text-center text-3xl text-gray-700 font-bold">
      This site is powered
      {' '}
      <a href="https://docs.coincap.io/">by CoinCap API</a>
    </h1>
    <h1 className="pt-20 text-center text-2xl text-gray-700 font-bold">
      The repo is
      {' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/epinczinger/crypto-stats-React"
        className="underline"
      >
        here.
      </a>
    </h1>
    <h1 className="pt-10 text-center text-2xl text-gray-700 font-bold">
      And the creator
      {' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://linkedin.com/in/esteban-pinczinger/"
        className="underline"
      >
        here.
      </a>
    </h1>
  </div>
);

export default AboutUs;
