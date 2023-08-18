import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  Badge,
  Divider,
} from "@chakra-ui/react";
import BaseLayout from "../components/BaseLayout";

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      title: "Pemberitahuan Penting",
      message: "Pemeliharaan sistem akan dilakukan pada tanggal 15 Mei 2023.",
      date: "13 Mei 2023",
      status: "unread",
    },
    {
      id: 2,
      title: "Pemberitahuan Urgent",
      message: "Ada pembaruan aplikasi yang perlu diunduh segera.",
      date: "10 Mei 2023",
      status: "read",
    },
    {
      id: 3,
      title: "Pemberitahuan Informasi",
      message:
        "Acara peluncuran produk baru akan diadakan pada tanggal 20 Mei 2023.",
      date: "8 Mei 2023",
      status: "unread",
    },
  ];

  return (
    <BaseLayout>
      <div className="bg-white p-16 rounded-lg">
        <Box p={4}>
          <Heading size="lg" mb={4}>
            Notifikasi
          </Heading>
          <VStack spacing={4} align="start" width="full">
            {notifications.map((notification) => (
              <Flex
                key={notification.id}
                direction="column"
                bg="white"
                p={4}
                borderRadius="md"
                boxShadow="md"
                width="full"
              >
                <Text fontWeight="bold" fontSize="lg">
                  {notification.title}
                </Text>
                <Text>{notification.message}</Text>
                <Flex justify="space-between" mt={2}>
                  <Text fontSize="sm" color="gray.500">
                    {notification.date}
                  </Text>
                  <Badge
                    colorScheme={
                      notification.status === "unread" ? "red" : "gray"
                    }
                    px={2}
                    py={1}
                    borderRadius="md"
                  >
                    {notification.status === "unread"
                      ? "Belum Dibaca"
                      : "Dibaca"}
                  </Badge>
                </Flex>
              </Flex>
            ))}
          </VStack>
          <Divider my={8} />
          <Text fontSize="sm" color="gray.500">
            Tidak ada notifikasi lainnya.
          </Text>
        </Box>
      </div>
    </BaseLayout>
  );
};

export default NotificationsPage;
