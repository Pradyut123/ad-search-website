import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchBar = () => {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Search</Form.Label>
      <Form.Control type="email" placeholder="Search ads" />
    </Form.Group>
  </Form>
  )
}

export default SearchBar