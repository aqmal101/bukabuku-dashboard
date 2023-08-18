import React from "react";
import {
  Box,
  Heading,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Grid,
  GridItem,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { PolarArea } from "react-chartjs-2";
import { faker } from "@faker-js/faker/locale/id_ID";
import Table from "../components/Table";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
export const data2 = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Home = () => {
  // Data statistik
  const totalSales = 1500;
  const averageSales = 50;
  const dailySales = 100;
  const monthlySales = 3000;
  const yearlySales = 36000;

  const handleViewNotifications = () => {
    // Implementasikan logika untuk mengarahkan ke halaman notifikasi
  };
  const generateData = (count) => {
    const data = [];
    for (let i = 0; i < count; i++) {
      const row = {
        id: i + 1,
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number("+62 89 ### ## ##"),
      };
      data.push(row);
    }
    return data;
  };

  // Dummy data for customers
  const customers = generateData(10);

  const columns = [
    {
      header: "ID",
      accessor: "id",
    },
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "Phone",
      accessor: "phone",
    },
  ];

  return (
    <BaseLayout>
      <div className="bg-white p-16 rounded-lg">
        <Box p={4}>
          <Flex justify="space-between" align="center">
            <Heading size="lg" mb={4}>
              Beranda
            </Heading>
            <Link to={"/notifications"}>
              <Button colorScheme="whatsapp" onClick={handleViewNotifications}>
                Lihat Notifikasi
              </Button>
            </Link>
          </Flex>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem colSpan={1}>
              <Stat>
                <StatLabel>Total Penjualan</StatLabel>
                <StatNumber>{totalSales}</StatNumber>
              </Stat>
            </GridItem>
            <GridItem colSpan={1}>
              <Stat>
                <StatLabel>Rata-rata Penjualan</StatLabel>
                <StatNumber>{averageSales}</StatNumber>
              </Stat>
            </GridItem>
            <GridItem colSpan={1}>
              <Stat>
                <StatLabel>Penjualan Harian</StatLabel>
                <StatNumber>{dailySales}</StatNumber>
              </Stat>
            </GridItem>
            <GridItem colSpan={1}>
              <Stat>
                <StatLabel>Penjualan Bulanan</StatLabel>
                <StatNumber>{monthlySales}</StatNumber>
              </Stat>
            </GridItem>
            <GridItem colSpan={1}>
              <Stat>
                <StatLabel>Penjualan Tahunan</StatLabel>
                <StatNumber>{yearlySales}</StatNumber>
              </Stat>
            </GridItem>
          </Grid>
        </Box>
        <Alert status="info" mt={4}>
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Notifikasi Penting!</AlertTitle>
            Pesan notifikasi yang penting bisa ditambahkan di sini.
          </Box>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
        <div className="w-full flex flex-row py-16">
          <div className="w-full flex flex-row  justify-start gap-5 py-16 items-center">
            <div>
              <Pie data={data} />
            </div>
            <div>
              <PolarArea data={data2} />
            </div>
          </div>
          <div className="w-full ">
            <h1 className="text-2xl font-bold py-5 text-green-700">
              Top Customer
            </h1>
            <Table columns={columns} data={customers} withoutPagination></Table>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
