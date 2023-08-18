import React from "react";
import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";
import Table from "../components/Table";
import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";
import AddStaffModal from "../components/AddStaffModal";
import BaseLayout from "../components/BaseLayout";

const StaffManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerData, setStaffData] = useState([]);
  const [user, setUser] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddUser = (newUser) => {
    setUser([...user, newUser]);
  };

  const getAllStaff = async () => {
    let { data: staff, error } = await supabase.from("staff").select("*");
    setStaffData(staff);
  };

  useEffect(() => {
    getAllStaff();
  }, []);

  // Dummy data for customers
  //   const customers = generateData(1000);

  const columns = [
    {
      header: "ID Staff",
      accessor: "id_staff",
    },
    {
      header: "Nama Staff",
      accessor: "nama",
    },
    {
      header: "Jenis Kelamin",
      accessor: "jenis_kelamin",
    },
    {
      header: "Tanggal Lahir",
      accessor: "tanggal_lahir",
    },
    {
      header: "Alamat",
      accessor: "alamat",
    },
    {
      header: "No Telepon",
      accessor: "no_telepon",
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "Posisi",
      accessor: "posisi",
    },
    {
      header: "Tanggal Mulai Kerja",
      accessor: "tanggal_mulai_kerja",
    },
  ];

  return (
    <BaseLayout>
      <div className="bg-white p-16 rounded-lg">
        <Box p={4}>
          <Heading size="lg" mb={4}>
            Staff Management
          </Heading>
          <Flex justify="flex-end" mb={4}>
            <Button colorScheme="green" size="sm" onClick={handleOpenModal}>
              Tambah Staff
            </Button>
          </Flex>
          <Table columns={columns} data={customerData}></Table>
        </Box>
      </div>

      <AddStaffModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddStaff={handleAddUser}
      />
    </BaseLayout>
  );
};

export default StaffManagementPage;
