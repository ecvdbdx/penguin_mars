import React from 'react';

export default props => {
  const roverOptions = props.rovers.map(rover => {
    return (
      <option key={rover.id} value={rover.id}>{rover.name}</option>
    );
  });
  const cameraOptions = props.cameras.map(camera => {
    return (
      <option key={camera.id} value={camera.id}>{camera.fullName}</option>
    );
  });

  return (
    <div className="filter">
      <select name="selectRover" id="selectRover">
        <option value="">Filter by rover</option>
        {roverOptions}
      </select>
      <select name="selectRover" id="selectRover">
        <option value="">Filter by camera</option>
        {cameraOptions}
      </select>
    </div>
  );
}