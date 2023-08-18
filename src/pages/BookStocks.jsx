import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Flex, Button, Input } from "@chakra-ui/react";
import { supabase } from "../supabaseClient";
import Table from "../components/Table";
import AddBookModal from "../components/AddBookModal";
import BaseLayout from "../components/BaseLayout";

const BookStocks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buku, setBuku] = useState([]);
  const [user, setUser] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddUser = (newUser) => {
    // Menambahkan produk ke daftar produk
    setUser([...user, newUser]);
  };

  const getAllBooks = async () => {
    let { data: buku, error } = await supabase.from("buku").select("*");
    setBuku(buku);
    // onAdduser(user);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  getAllBooks();

  // console.log("ini adalah data buku", buku);
  const columns = [
    {
      header: "ID Buku",
      accessor: "id_buku",
    },
    {
      header: "Judul",
      accessor: "judul",
    },
    {
      header: "Penulis",
      accessor: "penulis",
    },
    {
      header: "Penerbit",
      accessor: "penerbit",
    },
    {
      header: "Tahun Terbit",
      accessor: "tahun_terbit",
    },
    {
      header: "Kategori",
      accessor: "kategori",
    },
    {
      header: "Harga",
      accessor: "harga",
    },
    {
      header: "Stok",
      accessor: "stok",
    },
  ];
  return (
    <BaseLayout>
      <div className="p-16 rounded-lg bg-white">
        <Box p={4} className="bg-white rounded-lg">
          <Heading size="lg" mb={4}>
            Inventory
          </Heading>
          <div className="w-full  flex flex-row justify-between  py-5">
            <div className="flex flex-row justify-center items-center gap-4">
              <Input
                placeholder="Search"
                size={"md"}
                color={"teal"}
                w={400}
              ></Input>
              <Button>Search</Button>
            </div>
            <div>
              <Button colorScheme="whatsapp" mr={2} onClick={handleOpenModal}>
                Add Product
              </Button>
              <Button colorScheme="gray">Export CSV</Button>
            </div>
          </div>
          <Table columns={columns} data={buku} itemsPerPage={10} />
        </Box>
      </div>

      <AddBookModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddProduct={handleAddUser}
      />
    </BaseLayout>
  );
};

export default BookStocks;
