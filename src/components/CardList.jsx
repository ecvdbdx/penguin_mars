import React from 'react';
import Card from './Card';


export default (props) => {
  return (
    props.photos.map((photo, key) => (
      <Card
        key={key}
        {...photo}
      />
    ))
  )
}