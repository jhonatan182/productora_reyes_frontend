import React, {useState, useEffect } from "react"
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official"
import { DateRange } from "@material-ui/icons";
import { Select, ButtonGroup, Button } from "@material-ui/core";

import NavigatorReportes from "./navigatorReportes";

const StockProductos = () => {
  const [data, setData] = useState( [] );


  const getData = async () => {
    await axios.get('http://localhost:4000/api/reportes/productsStock').then((response) => {
        
        // console.log()
        setData(response.data);
      }).catch(error=>{console.log("Error")})
  }

  useEffect( ()=>{
      getData()
  }, [])

    function prepareValues(){
        let tempArray = data.map(function(data){
           return {
            name: data.producto,
            data: [parseInt(data.stock)],
           }
          }
        )
        return tempArray;
      };
      
      const LineChartOptions = {
        chart: {
          type: "column",
        },
        title:{
          text:''
        },
        yAxis: {
          title:{text:'Cantidad en Existencia'},
          allowDecimals:false,
        },
        xAxis: {
          visible:false,

        },

        tooltip:{valueSuffix:' Unidades'},
        
        series:  prepareValues(),
      };
    
    
    return(
        <div>
            <NavigatorReportes />

            <h3 style={{textAlign:"center"}}>Productos según Existencia</h3>
            {
              data.length > 0 ?
              <HighchartsReact
                  highcharts={Highcharts}
                  options={LineChartOptions}
              />
              :<h4 style={{textAlign:'center', fontStyle:'italic'}}>No hay Datos para Visualizar</h4>
            }
            <div style={{textAlign:"center"}}>
            <Select>
                <option value="a">Enero</option>
                <option value="b">Febrero</option>
                <option value="c">Marzo</option>
                <option value="d">Abril</option>
                <option value="e">Mayo</option>
                <option value="f">Junio</option>
                <option value="g">Julio</option>
                <option value="h">Agosto</option>
                <option value="i">Septiembre</option>
                <option value="j">Octubre</option>
                <option value="k" selected={true}>Noviembre</option>
                <option value="l">Diciembre</option>
            </Select>  
            </div>
           
        </div>
    )
}

export default StockProductos;