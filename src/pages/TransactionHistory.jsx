import React from "react";
import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import { supabase } from "../supabaseClient";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import BaseLayout from "../components/BaseLayout";
import AddTransactionModal from "../components/AddTransactionModal";

const TransactionHistoryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transaksi, setTransaksi] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Data dummy untuk riwayat transaksi
  // const transactions = [
  //   { id: 1, date: "2023-05-01", product: "Product A", amount: 100 },
  //   { id: 2, date: "2023-05-02", product: "Product B", amount: 50 },
  //   { id: 3, date: "2023-05-03", product: "Product C", amount: 75 },
  // Tambahkan data transaksi lainnya sesuai kebutuhan
  // ];

  const getAllTransaction = async () => {
    let { data: transaksi, error } = await supabase
      .from("transaksi")
      .select("*");
    setTransaksi(transaksi);
    // onAdduser(transaksi);
  };

  const handleAddTransaksi = (newTransaksi) => {
    setTransaksi([...transaksi, newTransaksi]);
  };

  useEffect(() => {
    getAllTransaction();
  }, []);

  const columns = [
    {
      header: "ID Transaksi",
      accessor: "id_transaksi",
    },
    {
      header: "Tanggal Transaksi",
      accessor: "tanggal_transaksi",
    },
    {
      header: "ID Pelanggan",
      accessor: "id_pelanggan",
    },
    {
      header: "Total Bayar",
      accessor: "total_bayar",
    },
    {
      header: "Metode Bayar",
      accessor: "metode_bayar",
    },
  ];

  return (
    <BaseLayout>
      <div className="bg-white p-16 rounded-lg">
        <Box p={4}>
          <Heading size="lg" mb={4}>
            Riwayat Transaksi
          </Heading>
          <Flex justify="flex-end" mb={4}>
            <Button colorScheme="green" size="sm" onClick={handleOpenModal}>
              Tambah Transaksi
            </Button>
          </Flex>
          <Table columns={columns} data={transaksi}></Table>
        </Box>
      </div>

      <AddTransactionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddUser={handleAddTransaksi}
      />
    </BaseLayout>
  );
};

export default TransactionHistoryPage;
