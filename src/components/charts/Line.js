import React,{useState, useEffect} from 'react';
import { ResponsiveLine } from '@nivo/line'

export default function Line({ data, CustomTooltip, Attentiveness = false, checkedItems, lineColors, customerGraph = false }) {
  if(!Attentiveness && !customerGraph) {
  return (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
        type: 'linear',
        min: 0,
        max: 'auto',
        // stacked: true,
        reverse: false
    }}
    yFormat=" >-.2f"
    curve="natural"
    axisTop={null}
    axisRight={null}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Timimgs',
        legendOffset: 36,
        legendPosition: 'middle',
        truncateTickAt: 0
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Number of customers attended',
        legendOffset: -40,
        legendPosition: 'middle',
        truncateTickAt: 0
    }}
    enablePoints={false}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    enableTouchCrosshair={true}
    useMesh={true}
    enableArea={true}
    colors={'#6F42C1'}
    tooltip={CustomTooltip}
  />
  );
}
  
  if(Attentiveness) {
    return(
      <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
          type: 'linear',
          min: 0,
          max: 'auto',
          // stacked: true,
          reverse: false
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Time In Minutes',
          legendOffset: -40,
          legendPosition: 'middle',
          truncateTickAt: 0
      }}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      colors={Object.keys(checkedItems).filter((key) => checkedItems[key]).map((key) => lineColors[key])}
      useMesh={true}
    />)}

    if(customerGraph){
      return(
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
              type: 'linear',
              min: 0,
              max: 'auto',
              reverse: false
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Timings',
              legendOffset: 36,
              legendPosition: 'middle',
              truncateTickAt: 0
          }}
          axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Total Number of Customers',
              legendOffset: -40,
              legendPosition: 'middle',
              truncateTickAt: 0
          }}
          enablePoints={false}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
          tooltip={CustomTooltip}
          colors={'#AD00FF'}
      />
      )
    }
}

