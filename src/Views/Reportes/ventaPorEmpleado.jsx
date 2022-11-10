import React, {useState, useEffect } from "react"
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official"
import { Select, MenuItem, InputLabel, FormControl, Input } from "@material-ui/core";
import NavigatorReportes from "./navigatorReportes";


const VentasEmpleados = () => {
const [data, setData] = useState( [] )


  const getData = async (month = 1) => {
    await axios.get('http://localhost:4000/api/reportes/salesEmployee?month='+encodeURIComponent(month)).then((response) => {
        
        // console.log()
        setData(response.data);
      }).catch(error=>{console.log("Error")})
  }

  const handleMonths = (value) => {
    getData(value);
  }

  useEffect( ()=>{
      getData()
  }, [])

    function prepareValues(){
        let tempArray = data.map(function(data){
           return {
            name: data.nombre_completo,
            data: [parseInt(data.cantidad_ventas)],
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
          title:{text:'Cantidad de Ventas'},
        },
        xAxis: {
          visible:false,
          title:{text:'Empleado'},
        },

        tooltip:{valueSuffix:' Ventas'},
        colors:["#EB88F7E","#56BEE6","#F2C09B","#91C2BE","#21B3FC"],
        series:  prepareValues(),
        credits:{
          enabled:false
        }
      };
    
    
    return(
        <div>
            <NavigatorReportes />
            <h3 style={{textAlign:"center"}}>5 Empleados con más Ventas</h3>
            {
              data.length > 0 ?
              <HighchartsReact
                  highcharts={Highcharts}
                  options={LineChartOptions}
              />
              :<h4 style={{textAlign:'center', fontStyle:'italic'}}>No hay Datos para Visualizar</h4>
            }
            <div style={{textAlign:"center"}}>
              <h5>Seleccione un Mes</h5>

            <FormControl sx={{minWidth:'1.2rem'}} size='medium'>
              <InputLabel id="select-month-label">
              Mes
              </InputLabel>

              <Select onChange={(e)=>{handleMonths(e.target.value)}} labelId="select-month-label" label="Mes">
                  <MenuItem selected={true} value={1} >Enero</MenuItem>
                  <MenuItem value={2}>Febrero</MenuItem>
                  <MenuItem value={3}>Marzo</MenuItem>
                  <MenuItem value={4}>Abril</MenuItem>
                  <MenuItem value={5}>Mayo</MenuItem>
                  <MenuItem value={6}>Junio</MenuItem>
                  <MenuItem value={7}>Julio</MenuItem>
                  <MenuItem value={8}>Agosto</MenuItem>
                  <MenuItem value={9}>Septiembre</MenuItem>
                  <MenuItem value={10}>Octubre</MenuItem>
                  <MenuItem value={11}>Noviembre</MenuItem>
                  <MenuItem value={12}>Diciembre</MenuItem>
              </Select>  
            </FormControl>
            </div>
           
        </div>
    )
}

export default VentasEmpleados;