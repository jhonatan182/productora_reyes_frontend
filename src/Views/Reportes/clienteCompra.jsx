import React, {useState, useEffect } from "react"
import { axiosPrivate } from "../../Services/api/axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official"
import { Select, MenuItem, InputLabel, FormControl, Input } from "@material-ui/core";
import NavigatorReportes from "./navigatorReportes";
import { useNavigate } from 'react-router-dom';


const ClientesCompras = () => {
  const Navigator = useNavigate();  
  const [data, setData] = useState( [] )


  const getData = async (month = 1) => {
    await axiosPrivate.get('http://localhost:4000/api/reportes/salesCustomer?month='+encodeURIComponent(month)).then((response) => {
        
        // console.log()
        setData(response.data);
      }).catch(error=>{alert("Error al Cargar los Datos desde la API")})
  }

  const handleMonths = (value) => {
    getData(value);
  }

  useEffect( ()=>{
    const auth =
      JSON.parse(localStorage.getItem('auth'))
      if(!auth)Navigator('/login')
      getData()
  }, [])

    function prepareValues(){
        let tempArray = data.map(function(data){
           return {
            name: data.nombre_completo,
            data: [parseInt(data.cantidad_compras)],
           }
          }
        )
        return tempArray;
      };
      
      const LineChartOptions = {
        chart: {
          type: "bar",
        },
        title:{
          text:''
        },
        yAxis: {
          title:{text:'Cantidad de Compras'},
          allowDecimals:false,
        },
        xAxis: {
          visible:false,

          title:{text:'Cliente'},
        },

        tooltip:{valueSuffix:' Compras'},
        colors:["#EB88F7E","#56BEE6","#F2C09B","#91C2BE","#21B3FC"],
        series:  prepareValues(),
      };
    
    
    return(
        <div>
          <NavigatorReportes />

            <h3 style={{textAlign:"center"}}>5 Clientes con más Compras</h3>
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

export default ClientesCompras;