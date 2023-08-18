import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from "@chakra-ui/react";
import BaseLayout from "../components/BaseLayout";

const FinancialReport = () => {
  // Data dummy untuk riwayat transaksi

  return (
    <BaseLayout>
      <div className="p-20 rounded-lg bg-white">
        <Box p={4}>
          <Heading size="lg" mb={4}>
            Financial Report
          </Heading>
          <Box bg="white" p={4} shadow="md">
            <Text fontSize="xl" mb={2}>
              Revenue: $10,000
            </Text>
            <Text fontSize="xl" mb={2}>
              Expenses: $5,000
            </Text>
            <Text fontSize="xl" mb={2}>
              Profit: $5,000
            </Text>
          </Box>
        </Box>
      </div>
    </BaseLayout>
  );
};

export default FinancialReport;
