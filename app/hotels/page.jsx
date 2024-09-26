"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Hotel from "../components/Hotel";
import Header1 from "../components/Header1";
import Filters from "../components/Filters";

const HotelsPage = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get('city');
  
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [price, setPrice] = useState(3000);
  const [list, setList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  const handlePrice = async () => {
    const { data } = await axios.get(`/api/search/range?price=${price}`);
    if (data.hotels) {
      setList(data.hotels);
    }
  };

  useEffect(() => {
    const handleCheckList = async () => {
      const { data } = await axios.get(`/api/search/find?val=${checkedList}`);
      if (data.hotels) {
        setList(data.hotels);
      }
    };
    if (checkedList) {
      handleCheckList();
    }
  }, [checkedList]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/hotels/hotelfunc?city=${city}`);
        setHotels(response.data.hotels);
      } catch (err) {
        setError('Failed to fetch hotels');
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchHotels();
    }
  }, [city]);

  return (
    <div>
      <Header1 />
      <div className='grid grid-cols-12'>
        <div className='col-span-3'>
          <Filters price={price} setPrice={setPrice} handlePrice={handlePrice} checkedList={checkedList} setCheckedList={setCheckedList} />
        </div>
        <div className='col-span-9'>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {list.length > 0 ? list.map((e) => (
            <div className='m-5' key={e._id}>
              <Hotel e={e} />
            </div>
          )) : hotels.length > 0 ? hotels.map((e) => (
            <div className='m-5' key={e._id}>
              <Hotel e={e} />
            </div>
          )) : !loading && <p>No hotels found.</p>}
        </div>
      </div>
    </div>
  );
};

const SuspendedHotelsPage = () => (
  <Suspense fallback={<div>Loading search parameters...</div>}>
    <HotelsPage />
  </Suspense>
);

export default SuspendedHotelsPage;


