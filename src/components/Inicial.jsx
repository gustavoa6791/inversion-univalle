import React, { Component } from "react";
import { Inversion, valorAgregado, reporteAnual } from '../utils/Algoritmo'
import Grafic from './Grafic.jsx'

class Inicial extends Component {

  constructor(props) {
    super(props)
    this.state = {
      disponible: 100000,
      inversiones: [new Inversion("Inversion 1", 0, 0, 0)],
      reporteAnual: []
    }
  }

  handleclick() {
    const inv = this.state.inversiones
    const index = inv.length + 1
    inv.push(new Inversion(`Inversion ${index}`, 0, 0, 0))

    this.setState({
      inversiones: inv
    })
  }

  handlechange(e) {
    const inv = this.state.inversiones
    inv[e.target.name].valor = parseInt(e.target.value)

    var valorTotal = 0
    inv.map((i, x) => {
      valorTotal += i.valor
    })

    this.setState({
      disponible: 100000 - valorTotal,
    })

  }
  generarSimulacion() {
    const inv = this.state.inversiones
    valorAgregado(inv)

      this.setState({
        inversiones: inv,
        reporteAnual: reporteAnual(inv)
      })
  }

  render() {

    return (

      <div>

        <div className="headers" >

          <div className="controls">
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    Inversion Total :
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input className="form-control" type="number" value="100.000" disabled />
                    </div>
                  </td>
                  <td>
                    Disponible:
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input className="form-control" type="number" value={new Intl.NumberFormat().format(this.state.disponible)} disabled />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    
                      Deduccion por mantener :
                      <div className="porc">
                    <div className="input-group mb-2">
                        <input className="form-control" type="number" value="1" disabled />
                        <div className="input-group-append">
                          <span className="input-group-text">%</span>
                        </div>
                      </div>
                    </div>

                  </td>
                  <td>
                    
                      Deduccion por cambio:
                      <div className="porc">
                      <div className="input-group mb-2">
                          <input className="form-control" type="number" value='2' disabled />
                          <div className="input-group-append">
                            <span className="input-group-text">%</span>
                         </div>
                      </div>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>

            <table>
              <thead>

              </thead>
              <tbody>
                <tr>
                  <td></td>

                  <td><button className="btn btn-secondary" onClick={() => { this.handleclick() }}>Agregar inversion</button></td>
                </tr>
                {this.state.inversiones.map((i, x) => {
                  return (
                    <tr key={x}>
                      <td>{i.nombre}:&nbsp;&nbsp;</td>
                      <td>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <input className="form-control" type="number" name={x} onChange={() => { this.handlechange(event) }} placeholder="Ingrese valor" />
                        </div>

                      </td>



                    </tr>
                  )
                })}
              </tbody>
            </table>
            <br />
            <br />
            <button className="btn btn-primary" onClick={() => { this.generarSimulacion() }}>generar simulacion</button>
            <br />
            <br />
          </div>
          <div className="grafic">
            <Grafic generalData={this.state.reporteAnual} />
          </div>
        </div>

        {this.state.reporteAnual.map((i, x) => {
          return (
            <div key={x}>
              <br />
              <table className="table table-sm" key={x}>
                <thead className="thead-light">
                  <tr>
                    <th>AÑO {x + 1}</th>
                  </tr>
                  <tr>
                    <th>Nombre</th>
                    <th>inversion</th>
                    <th>Interes</th>
                    <th>Deduccion</th>
                    <th>Ganancia</th>
                    <th>Total</th>
                  </tr>

                </thead>
                <tbody>
                  {i.map((i2, x2) => {
                    return (
                      <tr key={x2}>
                        <td>{i2.nombre}</td>
                        <td>${new Intl.NumberFormat().format(i2.valor)} </td>
                        <td>{i2.ganancia}%</td>
                        <td></td>
                        <td>${new Intl.NumberFormat().format(i2.valorAgregado)}</td>
                        <td></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Inicial
