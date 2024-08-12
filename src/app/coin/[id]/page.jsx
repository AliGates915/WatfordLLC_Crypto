"use client";
import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import Info from "../../../components/Coin/Info";
import SelectDays from "../../../components/Coin/SelectDays";
import ToggleComponents from "../../../components/Coin/ToggleComponent";
import Button from "../../../components/Common/Button";
import Loader from "../../../components/Common/Loader";
import LineChart from '../../../components/Coin/LineChart';
import List from "../../../components/dashboard/List";
import { getCoinData } from "../../../functions/getCoinData";
import { getPrices } from "../../../functions/getPrices";
import { settingCoinObject } from "../../../functions/settingCoinObject";
import './styles.css';

function Coin() {
  const params = useParams();
  const { id } = params;
  console.log("Params:", params);
  console.log("ID:", id);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });
  const [coin, setCoin] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    console.log("useEffect triggered");
    if (id) {
      console.log("ID exists:", id);
      getData();
    }
  }, [id]);

  const getData = async () => {
    console.log("getData function called");
    setLoading(true);
    try {
      let coinData = await getCoinData(id, setError);
      console.log("Coin DATA>>>>", coinData);
      settingCoinObject(coinData, setCoin);
      if (coinData) {
        const prices = await getPrices(id, days, priceType, setError);
        console.log("Prices>>>>", prices);
        if (prices) {
          setChartData(prices);
        }
      }
    } catch (e) {
      console.error("Error in getData:", e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDaysChange = async (event) => {
    console.log("handleDaysChange called with", event.target.value);
    setLoading(true);
    setDays(event.target.value);
    const prices = await getPrices(id, event.target.value, priceType, setError);
    if (prices) {
      setChartData(prices);
    }
    setLoading(false);
  };

  const handlePriceTypeChange = async (event) => {
    console.log("handlePriceTypeChange called with", event.target.value);
    setLoading(true);
    setPriceType(event.target.value);
    const prices = await getPrices(id, days, event.target.value, setError);
    if (prices) {
      setChartData(prices);
    }
    setLoading(false);
  };

  return (
    <>
      {!error && !loading && coin.id ? (
        <>
          <div className="grey-wrapper">
            <List coin={coin} delay={0.5} />
          </div>
          <div className="grey-wrapper">
            <SelectDays handleDaysChange={handleDaysChange} days={days} />
            <ToggleComponents
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} />
          </div>
          <Info title={coin.name} desc={coin.desc} />
        </>
      ) : error ? (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, Couldn't find the coin you're looking for 😞
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <a href="/dashboard">
              <Button text="Dashboard" outlined="true" />
            </a>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Coin;
