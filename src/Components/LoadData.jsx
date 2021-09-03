import React from 'react';

class LoadData extends React.Component {

  render() {
    let data = {
      sample: 'Muestra1',
      load: [0, 10, 15, 25, 50, 75],
    };


    return (
      <div className='components'>
        <p>{'Numero de muestra: ' + data.sample}</p>
        <p>{'Carga aplicada: ' + data.load}</p>
      </div>
    );
  }
}

export default LoadData;