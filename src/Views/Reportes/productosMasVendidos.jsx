import React, {useState, useEffect } from "react"
import { axiosPrivate } from "../../Services/api/axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official"
import { Select, MenuItem, InputLabel, FormControl, Input } from "@material-ui/core";
import NavigatorReportes from "./navigatorReportes";
import { useNavigate } from 'react-router-dom';


const ProductosMasVendidos = () => {
  const Navigator = useNavigate();  
  const [products, setProducts] = useState( [] )


  const getData = async (month = 1) => {
    await axiosPrivate.get('http://localhost:4000/api/reportes/mostSoldProducts?month='+encodeURIComponent(month)).then((response) => {
        
        // console.log()
        setProducts(response.data);
      }).catch(error=>{console.log("Error")})
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
        let tempArray = products.map(function(data){
           return {
            name: data.producto,
            y: parseInt(data.cantidad_ventas),
           }
          }
        )
        console.log(tempArray)
        // return [{name:"Test", y:2},{name:"Test2", y:5},{name:"Test3", y:7}];
        return tempArray;
      };

      const LineChartOptions = {
        chart: {
          type: "pie",
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
        },
        title: {
          text: "",
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.y}</b>",
          valueSuffix: ' unidades'
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.y} Unidades ",
            },
          },
        },
        colors: ["#EB8F7E", "#56BEE6", "#F2C09B", "#91C2BE", "#21B3FC"],
        series: [
          {
            name: "Cantidad Vendida",
            colorByPoint: true,
            data: prepareValues(),
          },
        ],
        credits: {
          enabled: false,
        },
      };
    
    
    return(
        <div>
            <NavigatorReportes />

            <h3 style={{textAlign:"center"}}>Los 5 Productos Más Vendidos</h3>
            {
              products.length > 0 ?
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

export default ProductosMasVendidos;