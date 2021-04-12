import React, { useState } from 'react';
import { FilterSection, Table } from '../../components';

import { data } from './Data';

const Home = () => {
  const [errors, setErrors] = useState({
    origin: '',
    destination: '',
  });
  const [values, setValues] = useState({
    origin: '',
    destination: '',
  });

  const [filteredData, setFilteredData] = useState(null);

  const isUsZipCode = (str) => {
    const regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

    if (regexp.test(str)) {
      return true;
    }
    return false;
  };
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const localeErrors = { ...errors };
    switch (name) {
      case 'origin':
        localeErrors.origin = !isUsZipCode(value) ? 'Please put a valid zip code' : '';
        setValues({ ...values, [name]: value });
        break;
      case 'destination':
        localeErrors.destination = !isUsZipCode(value) ? 'Please put a valid zip code' : '';
        setValues({ ...values, [name]: value });
        break;

      default:
        break;
    }
    setErrors(localeErrors);
  };

  const validateForm = () => {
    const { origin, destination } = values;
    const localeErrors = { ...errors };
    if (!isUsZipCode(origin)) {
      localeErrors.origin = 'Please put a valid zip code';
    } else if (!isUsZipCode(destination)) {
      localeErrors.destination = 'Please put a valid zip code';
    } else {
      return true;
    }
    setErrors(localeErrors);
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { origin, destination } = values;
    if (errors.origin.length === 0 && errors.destination.length === 0 && validateForm()) {
      const tempData = data.filter(
        (truck) => origin < truck.available && truck.available < destination
      );
      setFilteredData(tempData);
    } else {
      setFilteredData(null);
    }
  };
  return (
    <>
      <FilterSection
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
        values={values}
      />

      {filteredData && filteredData.length > 0 && <Table data={filteredData} />}
    </>
  );
};

export default Home;
