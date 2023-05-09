import { Bar } from "react-chartjs-2";
import 'chart.js/auto'
export default function Barchart(props) {
    return (
      <Bar data={props.chartData} options={
        {
          scales: {
            y:
              {
                min: 0,
                max: 100,              
                grace: '5%',
                ticks:{
                  stepSize: 5,
                 
                }
              },
            x:
              {
                
              },
          },
        }
      } />
    )
  }