import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react"
import dynamic from "next/dynamic"

import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

import { ApexOptions } from 'apexcharts'
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    theme: 'dark'
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[500]
    },
    axisTicks: {
      color: theme.colors.gray[500]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}
const series = [{
  name: 'weekly subs',
  data: [102, 23, 123, 20, 1203, 203, 129]
}]

function dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex
        w='100%'
        px='6'
        my='6'
        mx='auto'
        maxWidth={1480}
      >
        <Sidebar />

        <SimpleGrid minChildWidth='320px' flex='1' gap='4' alignContent='flex-start'>
          <Box
            p={['6', '8']}
            bg='gray.800'
            borderRadius={8}
          >
            <Text fontSize='lg' mb='4' >Weekly subscribers</Text>
            <Chart height={160} series={series} options={options} type='area' />
          </Box>
          <Box
            p={['6', '8']}
            bg='gray.800'
            borderRadius={8}
          >
            <Text fontSize='lg' mb='4' >Weekly subscribers</Text>
            <Chart height={160} series={series} options={options} type='area' />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex >
  )
}

export default dashboard