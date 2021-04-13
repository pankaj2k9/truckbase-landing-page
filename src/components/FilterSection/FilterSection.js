import React from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Container } from '../../globalStyles';
import {
  Heading,
  Form,
  FormInput,
  Label,
  InputWarpper,
  SubmitButton,
  Error,
  FilterSectionWarpper,
  FilterColumn,
  SubHeading,
  Img,
  BtnWarpper,
  Terms,
} from './FilterSection.elements';
import FilterBanner from '../../assests/images/truck-img.svg';

const FilterSection = ({ handleSubmit, handleChange, errors, values }) => (
  <Container>
    <FilterSectionWarpper>
      <FilterColumn>
        <Heading>Book a Truck with One Click!</Heading>
        <SubHeading>
          Enter details to get flat rate shipping quotes for the next 14 days. No signup required.
        </SubHeading>
        <Img src={FilterBanner} alt="#" />
      </FilterColumn>
      <FilterColumn>
        <Form onSubmit={handleSubmit}>
          <InputWarpper>&nbsp;</InputWarpper>
          <InputWarpper>
            <Label htmlFor="origin">Pickup location </Label>
            {/* <GooglePlacesAutocomplete
              apiKey="AIzaSyC9j_lPWXHAXochqDdcIxivggT7D0RQmdw"
              selectProps={{
                name: 'origin',
                value: values.origin,
                onChange: handleChange,
                placeholder: 'ZIP code or city name',
                className: 'google-place-input',
              }}
            /> */}
            <FormInput
              name="origin"
              type="number"
              placeholder="Origin"
              onChange={handleChange}
              value={values.origin}
            />
            {errors.origin.length > 0 && <Error>{errors.origin}</Error>}
          </InputWarpper>
          <InputWarpper>
            <Label htmlFor="destination">Dropoff location</Label>

            {/* <GooglePlacesAutocomplete
              apiKey="AIzaSyC9j_lPWXHAXochqDdcIxivggT7D0RQmdw"
              selectProps={{
                name: 'destination',
                value: values.destination,
                onChange: handleChange,
                placeholder: 'ZIP code or city name',
                className: 'google-place-input',
              }}
            /> */}
            <FormInput
              name="destination"
              type="number"
              placeholder="Destination"
              onChange={handleChange}
              value={values.destination}
            />

            {errors.destination.length > 0 && <Error>{errors.destination}</Error>}
          </InputWarpper>
          <InputWarpper>
            <Terms>
              Enter details to get flat rate shipping quotes for the next 14 days. No signup
              required.Enter details to get flat rate shipping quotes for the next 14 days. No
              signup required.
            </Terms>
          </InputWarpper>
          <BtnWarpper>
            <SubmitButton fontBig type="submit">
              Get freight quote
            </SubmitButton>
          </BtnWarpper>
        </Form>
      </FilterColumn>
    </FilterSectionWarpper>
  </Container>
);

export default FilterSection;
