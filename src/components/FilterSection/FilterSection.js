import React from 'react';
import { Container } from '../../globalStyles';
import {
  Heading,
  Form,
  FormInput,
  Label,
  InputWarpper,
  SubmitButton,
  Error,
} from './FilterSection.elements';

const FilterSection = ({ handleSubmit, handleChange, errors, values }) => (
  <Container>
    <Heading>Book a Truck with One Click!</Heading>

    <Form onSubmit={handleSubmit}>
      <InputWarpper>
        <Label htmlFor="origin">Origin: </Label>
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
        <Label htmlFor="destination">Destination :</Label>
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
        <SubmitButton fontBig type="submit">
          Get Price
        </SubmitButton>
      </InputWarpper>
    </Form>
  </Container>
);

export default FilterSection;
