import { useState, useEffect } from 'react';
import { countryItemsQuery, venueTypeItemsQuery } from './api';
import { useDispatch } from 'react-redux';

export const useFetchDataVenuesTypes = () => {
  const dispatch = useDispatch();
  const [dataVenuesTypes, setData] = useState([]);

  useEffect(() => {
    dispatch(venueTypeItemsQuery() as any)
      .unwrap()
      .then((result: any) => {
        setData(result);
      })
      .catch((rejectedValueOrSerializedError: any) => {
        console.log(rejectedValueOrSerializedError);
      });
  }, [dispatch]);

  return { dataVenuesTypes };
};

export const useFetchDataCountries = () => {
  const dispatch = useDispatch();
  const [dataCountries, setData] = useState([]);

  useEffect(() => {
    dispatch(countryItemsQuery() as any)
      .unwrap()
      .then((result: any) => {
        setData(result);
      })
      .catch((rejectedValueOrSerializedError: any) => {
        console.log(rejectedValueOrSerializedError);
      });
  }, [dispatch]);

  return { dataCountries };
};
