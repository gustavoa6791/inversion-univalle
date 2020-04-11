import React from 'react';
import { Line } from 'react-chartjs-2';

const state = {
  labels: ['0', 'Año 1', 'Año 2', 'Año 3', 'Año 4', 'Año 5', 'Año 6', 'Año 7', 'Año 8', 'Año 9', 'Año 10',],
  datasets: [
    {
      label: '',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 2,
      data: []
    }
  ]
}



class Grafic extends React.Component {
  render() {
    const colors1 = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ]
    const colors2 = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ]

    const datasets = []

    const gd = this.props.generalData

    if (gd[0] != undefined) {

      for (let i = 0; i < gd[0].length; i++) {
        const forData = []

        for (let j = 0; j < gd.length; j++) {
          j == 0 ? forData.push(gd[j][i].valor) : null;
          forData.push(gd[j][i].valorAgregado + gd[j][i].valor)
        }
        datasets.push({
          label: gd[0][i].nombre,
          fill: false,
          lineTension: 0.5,
          backgroundColor: colors1[i],
          borderColor: colors2[i],
          borderWidth: 2,
          data: forData
        })
      }
      state['datasets'] = datasets
    }

    return (
      <div>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: 'Rendimiento de inversion por año',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    );
  }
}

export default Grafic