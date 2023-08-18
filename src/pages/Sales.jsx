import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import BaseLayout from "../components/BaseLayout";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const SalesPage = () => {
  // Dummy data for sales statistics
  const totalSales = 1500;
  const averageSales = 50;
  const dailySales = 100;
  const monthlySales = 3000;
  const yearlySales = 36000;

  const transactions = [
    { id: 1, date: "2023-05-01", product: "Product A", amount: 100 },
    { id: 2, date: "2023-05-02", product: "Product B", amount: 50 },
    { id: 3, date: "2023-05-03", product: "Product C", amount: 75 },
    // Add more transaction data as needed
  ];

  return (
    <BaseLayout>
      <div className="p-20 rounded-lg bg-white">
        <Heading size="lg" mb={4} color="black">
          Sales
        </Heading>
        <Flex flexWrap="wrap">
          <Stat colorScheme="teal">
            <StatLabel>Total Sales</StatLabel>
            <StatNumber>{totalSales}</StatNumber>
          </Stat>
          <Stat colorScheme="teal">
            <StatLabel>Average Sales</StatLabel>
            <StatNumber>{averageSales}</StatNumber>
          </Stat>
          <Stat colorScheme="teal">
            <StatLabel>Daily Sales</StatLabel>
            <StatNumber>{dailySales}</StatNumber>
          </Stat>
          <Stat colorScheme="teal">
            <StatLabel>Monthly Sales</StatLabel>
            <StatNumber>{monthlySales}</StatNumber>
          </Stat>
          <Stat colorScheme="teal">
            <StatLabel>Yearly Sales</StatLabel>
            <StatNumber>{yearlySales}</StatNumber>
          </Stat>
        </Flex>
        <Box mt={8}>
          <Heading size="md" mb={4} color="teal.500">
            Sales Chart
          </Heading>
          <Line options={options} data={data} />
        </Box>
        <Box mt={8}>
          <Heading size="md" mb={4} color="teal.500">
            Transaction History
          </Heading>
          <Table variant="simple" colorScheme="teal" size={"md"}>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Date</Th>
                <Th>Product</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((transaction) => (
                <Tr key={transaction.id}>
                  <Td>{transaction.id}</Td>
                  <Td>{transaction.date}</Td>
                  <Td>{transaction.product}</Td>
                  <Td>{transaction.amount}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </div>
    </BaseLayout>
  );
};

export default SalesPage;
