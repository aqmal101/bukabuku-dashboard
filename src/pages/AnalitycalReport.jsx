import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Divider,
} from "@chakra-ui/react";
import BaseLayout from "../components/BaseLayout";

const AnalyticalReport = () => {
  return (
    <BaseLayout>
      <div className="bg-white rounded-lg p-16">
        <Box p={4}>
          <Heading size="lg" mb={4}>
            Laporan Analitis
          </Heading>
          <Flex direction="column" align="start">
            <VStack spacing={4} align="start" width="full">
              <Text fontSize="lg" fontWeight="bold">
                Statistik Penjualan
              </Text>
              <SimpleGrid columns={4} spacing={4} width="full">
                <Stat>
                  <StatLabel>Total Penjualan</StatLabel>
                  <StatNumber>500</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Penjualan Harian</StatLabel>
                  <StatNumber>100</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Penjualan Bulanan</StatLabel>
                  <StatNumber>3000</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Penjualan Tahunan</StatLabel>
                  <StatNumber>36000</StatNumber>
                </Stat>
              </SimpleGrid>
            </VStack>
            <Divider my={8} />
            <VStack spacing={4} align="start" width="full">
              <Text fontSize="lg" fontWeight="bold">
                Statistik Pengunjung
              </Text>
              <SimpleGrid columns={3} spacing={4} width="full">
                <Stat>
                  <StatLabel>Total Pengunjung</StatLabel>
                  <StatNumber>1000</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Pengunjung Harian</StatLabel>
                  <StatNumber>200</StatNumber>
                </Stat>
                <Stat>
                  <StatLabel>Pengunjung Bulanan</StatLabel>
                  <StatNumber>5000</StatNumber>
                </Stat>
              </SimpleGrid>
            </VStack>
          </Flex>
        </Box>
      </div>
    </BaseLayout>
  );
};

export default AnalyticalReport;
