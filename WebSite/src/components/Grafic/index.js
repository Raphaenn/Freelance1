import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

import { Container } from './styles';
import Test from "../../services/test.json"

export default function Grafic({}) {

  return (
    <Container>
      <ResponsiveBar
      data={[
        {
          "Cupoms": "CP",
          "Dona Joaquina": 11,
          "hot dogColor": "hsl(242, 70%, 50%)",
          "Mister Pizza": 93,
          "burgerColor": "hsl(67, 70%, 50%)",
          "DiAna": 67,
          "sandwichColor": "hsl(311, 70%, 50%)",
          "Hidráulica": 133,
          "kebabColor": "hsl(130, 70%, 50%)",
          "Vidraçaria": 133,
          "friesColor": "hsl(148, 70%, 50%)",
          "Knk": 161,
          "donutColor": "hsl(358, 70%, 50%)"
        },]}
      keys={[ 'Dona Joaquina', 'Mister Pizza', 'DiAna', 'Hidráulica', 'Vidraçaria', 'Knk' ]}
      indexBy="Cupoms"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      colors={{ scheme: 'nivo' }}
      defs={[
          {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true
          },
          {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
          }
      ]}
      fill={[
          {
              match: {
                  id: 'fries'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'sandwich'
              },
              id: 'lines'
          }
      ]}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Cupons',
          legendPosition: 'middle',
          legendOffset: 32
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
      legends={[
          {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
  />
    </Container>
  );
}
