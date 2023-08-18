import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { supabase } from "../supabaseClient";

const AddBookModal = ({ isOpen, onClose, onAdduser }) => {
  const [user, setUser] = useState({});
  // console.log(user);

  const handleAddProduct = async () => {
    // Validasi atau manipulasi data sebelum menambahkan produk

    const { data, error } = await supabase.from("buku").insert([user]).select();
    // Panggil fungsi onAddProduct untuk menambahkan produk
    // .onAddUser(newBooks);
    // console.log(user);

    // Reset form input
    setUser({});

    // Tutup modal
    onClose();
  };

  const formatKategori = (kategoriValue) => {
    // Mengganti underscore (_) menjadi spasi dan mengubah huruf pertama menjadi kapital
    return kategoriValue
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Judul Buku</FormLabel>
            <Input
              onChange={(e) => setUser({ ...user, judul: e.target.value })}
              placeholder="Masukkan Judul Buku"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Penulis</FormLabel>
            <Input
              onChange={(e) => setUser({ ...user, penulis: e.target.value })}
              placeholder="Masukkan Penulis Buku"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Penerbit</FormLabel>
            <Input
              onChange={(e) => setUser({ ...user, penerbit: e.target.value })}
              placeholder="Masukkan Penerbit "
            />
          </FormControl>
          <FormControl>
            <FormLabel>Tahun Terbit</FormLabel>
            <Input
              type="number"
              onChange={(e) =>
                setUser({ ...user, tahun_terbit: e.target.value })
              }
              placeholder="Masukkan Tahun Terbit"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Kategori Buku</FormLabel>
            <Select
              placeholder="Pilih Kategori Buku"
              onChange={(e) =>
                setUser({ ...user, kategori: formatKategori(e.target.value) })
              }
            >
              <option value="perkembangan_diri">Perkembangan Diri</option>
              <option value="sastra">Sastra</option>
              <option value="filosofi">Filosofi</option>
              <option value="sejarah">Sejarah</option>
              <option value="fiksi">Fiksi</option>
              <option value="fiksi_ilmiah">Fiksi-Ilmiah</option>
              <option value="fantasi">Fantasi</option>
              <option value="horor">Horor</option>
              <option value="biografi">Biografi</option>
              <option value="pengetahuan">Pengetahuan</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Harga</FormLabel>
            <Input
              type="number"
              onChange={(e) => setUser({ ...user, harga: e.target.value })}
              placeholder="Masukkan Harga Buku"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Stok</FormLabel>
            <Input
              type="number"
              onChange={(e) => setUser({ ...user, stok: e.target.value })}
              placeholder="Masukkan Stok Buku"
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleAddProduct}>
            Add
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddBookModal;
