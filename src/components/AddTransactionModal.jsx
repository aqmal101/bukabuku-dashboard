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
  InputGroup,
  InputLeftAddon,
  Input,
  Select,
} from "@chakra-ui/react";
import { supabase } from "../supabaseClient";

const AddTransactionModal = ({ isOpen, onClose, onAddUser }) => {
  const [transaksi, setTransaksi] = useState({});
  console.log(transaksi);
  // console.log(user)

  const handleSubmit = async () => {
    // Validasi atau manipulasi data input jika diperlukan
    // Membuat objek user baru
    // Mengirim user baru ke parent component

    const { data, error } = await supabase
      .from("transaksi")
      .insert([transaksi])
      .select();

    console.log(transaksi);

    // Reset nilai input
    setTransaksi({});
    // Menutup modal
    onClose();
  };

  const formatMetode = (metodeValue) => {
    // Mengganti underscore (_) menjadi spasi dan mengubah huruf pertama menjadi kapital
    return metodeValue
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Tambahkan Transaksi</ModalHeader>
        <ModalCloseButton />
        <ModalBody className="space-y-5">
          <FormControl mt={4}>
            <FormLabel>Tanggal Transaksi</FormLabel>
            <Input
              placeholder="Select Date"
              size="md"
              type="date"
              onChange={(e) =>
                setTransaksi({
                  ...transaksi,
                  tanggal_transaksi: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl>
            <FormLabel>ID Pelanggan</FormLabel>
            <Input
              onChange={(e) =>
                setTransaksi({ ...transaksi, id_pelanggan: e.target.value })
              }
              placeholder="Enter ID Customer"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Total Bayar</FormLabel>
            <Input
              type="number"
              onChange={(e) =>
                setTransaksi({ ...transaksi, total_bayar: e.target.value })
              }
              placeholder="Enter Total Bayar"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Metode Pembayaran</FormLabel>
            <Select
              placeholder="Pilih Metode Pembayaran"
              onChange={(e) =>
                setTransaksi({
                  ...transaksi,
                  metode_bayar: formatMetode(e.target.value),
                })
              }
            >
              <option value="tunai">Tunai</option>
              <option value="non_tunai">Non Tunai</option>
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Add
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddTransactionModal;
