import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CoinDetails = () => {
  const coins = useSelector((state) => state.coin);
  const { id } = useParams();
  const thisCoin = coins.filter((coin) => coin.rank === id)[0];
  const {
    name,
    symbol,
    priceUsd,
    volumeUsd24Hr,
    marketCapUsd,
    changePercent24Hr,
    explorer,
  } = thisCoin;
  const greenRed = Number(changePercent24Hr) > 0 ? 'text-green-700' : 'text-red-700';

  return (
    <div className="h60">
      <Link to="/">
        <button
          className="float-right mr-4 mb-2 justify-end py-2 px-4 border-yellow-500 border font-semibold rounded"
          type="button"
        >
          Back
        </button>
      </Link>
      <div className="bg-gray-200 clear-both rounded shadow sm:h-96 container mx-auto my-4 p-6 sm:p-12 max-w-3xl flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="pl-5">
            <h1 className="sm:text-5xl text-xl font-semibold">{name}</h1>
            <p className="sm:text-2xl sm:pt-4">{symbol}</p>
          </div>
          <p className="sm:text-5xl text-xl sm:pr-16">
            {`$ ${Number(priceUsd).toFixed(2)}`}
          </p>
        </div>
        <div className="sm:flex text-center pt-4 sm:pt-0 justify-between">
          <div>
            <p className="sm:text-xl text-sm sm:pb-3">
              {`Volume 24h: $ ${Number(volumeUsd24Hr).toFixed(2)}`}
            </p>
            <p className="sm:text-xl text-sm sm:py-2">
              {`Market Cap: $ ${Number(marketCapUsd).toFixed(2)} usd`}
            </p>
          </div>
          <div className="">
            <p className={`${greenRed} sm:text-3xl text-xl py-4 sm:pt-0`}>
              {`${Number(changePercent24Hr).toFixed(2)} %`}
            </p>
            <a
              className="sm:text-2xl py-2 px-4 border-yellow-500 hover:bg-yellow-400 hover:text-gray-800 border rounded"
              target="_blank"
              rel="noreferrer"
              href={explorer}
            >
              I wanna learn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
