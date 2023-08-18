import React from "react";
import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";
import Table from "../components/Table";
import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";
import AddCustomerModal from "../components/AddCustomerModal";
import BaseLayout from "../components/BaseLayout";

const CustomerManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerData, setCustomerData] = useState([]);
  const [users, setUsers] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const getAllCustomer = async () => {
    let { data: pelanggan, error } = await supabase
      .from("pelanggan")
      .select("*");
    setCustomerData(pelanggan);
  };

  useEffect(() => {
    getAllCustomer();
  }, []);

  // Dummy data for customers
  //   const customers = generateData(1000);

  const columns = [
    {
      header: "ID Pelanggan",
      accessor: "id_pelanggan",
    },
    {
      header: "Nama Pelanggan",
      accessor: "nama",
    },
    {
      header: "Jenis Kelamin",
      accessor: "jenis_kelamin",
    },
    {
      header: "Alamat",
      accessor: "alamat",
    },
    {
      header: "Tanggal Lahir",
      accessor: "tanggal_lahir",
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "No Telpon",
      accessor: "no_telpon",
    },
  ];

  return (
    <BaseLayout>
      <div className="bg-white p-16 rounded-lg">
        <Box p={4}>
          <Heading size="lg" mb={4}>
            Customer Management
          </Heading>
          <Flex justify="flex-end" mb={4}>
            <Button colorScheme="green" size="sm" onClick={handleOpenModal}>
              Tambah Customer
            </Button>
          </Flex>
          <Table columns={columns} data={customerData}></Table>
        </Box>
      </div>

      <AddCustomerModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddUser={handleAddUser}
      />
    </BaseLayout>
  );
};

export default CustomerManagementPage;
