import { ProgressBar } from "react-bootstrap"

const Chart = (props) =>{

  const fxMonthlyExpense = (dataPoint) =>{
    return <ProgressBar min ='0' max = '100'  variant={dataPoint.variant} now={dataPoint.value} label = {dataPoint.month + ' (' + dataPoint.value.toFixed(2) + '%)'} key={dataPoint.month}/>;

  }

  const dataPoints = [
    {month :'Jan', value : 0, variant : ''},
    {month :'Feb', value : 0, variant : ''},
    {month :'Mar', value : 0, variant : ''},
    {month :'Apr', value : 0, variant : ''},
    {month :'May', value : 0, variant : ''},
    {month :'Jun', value : 0, variant : ''},
    {month :'Jul', value : 0, variant : ''},
    {month :'Aug', value : 0, variant : ''},
    {month :'Sep', value : 0, variant : ''},    
    {month :'Oct', value : 0, variant : ''},
    {month :'Nov', value : 0, variant : ''},
    {month :'Dec', value : 0, variant : ''}

  ];

  let totalYearlyExpense = 0
  for(let i =0 ; i < props.yearlyData.length; i++){
    dataPoints[props.yearlyData[i].date.getMonth()].value += props.yearlyData[i].amount;
    totalYearlyExpense += eval(props.yearlyData[i].amount);
    console.log(dataPoints[i].value);
  }

  console.log(totalYearlyExpense);

  const variants = ['success', 'danger', 'info', 'warning']
  let j =0;
  for(let i =0 ; i < dataPoints.length; i++){
    dataPoints[i].value = dataPoints[i].value*100/totalYearlyExpense;
    if(dataPoints[i].value > 0){
      dataPoints[i].variant = variants[j];
      j = (j+1)% variants.length;
    }
  }



  return(
    <ProgressBar> 
      {dataPoints.map(fxMonthlyExpense)}
    </ProgressBar>

  );
};

export default Chart;