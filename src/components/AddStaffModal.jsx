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

const AddStaffModal = ({ isOpen, onClose, onAddUser }) => {
  const [user, setUser] = useState({});
  console.log(user);

  const handleSubmit = async () => {
    // Validasi atau manipulasi data input jika diperlukan
    // Membuat objek user baru
    // Mengirim user baru ke parent component

    const { data, error } = await supabase
      .from("staff")
      .insert([user])
      .select();

    console.log(user);

    // Reset nilai input
    setUser({});
    // Menutup modal
    onClose();
  };

  const formatJenisKelamin = (jenisKelaminValue) => {
    // Mengganti underscore (_) menjadi spasi dan mengubah huruf pertama menjadi kapital
    return jenisKelaminValue
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("-");
  };

  const formatPosisi = (posisiValue) => {
    // Mengganti underscore (_) menjadi spasi dan mengubah huruf pertama menjadi kapital
    return posisiValue
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Tambahkan Staff</ModalHeader>
        <ModalCloseButton />
        <ModalBody className="space-y-5">
          <FormControl>
            <FormLabel>Nama</FormLabel>
            <Input
              onChange={(e) => setUser({ ...user, nama: e.target.value })}
              placeholder="Enter nama"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Jenis Kelamin</FormLabel>
            <Select
              placeholder="Pilih Jenis Kelamin"
              onChange={(e) =>
                setUser({
                  ...user,
                  jenis_kelamin: formatJenisKelamin(e.target.value),
                })
              }
            >
              <option value="laki_laki">Laki-laki</option>
              <option value="perempuan">Perempuan</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Alamat</FormLabel>
            <Input
              onChange={(e) => setUser({ ...user, alamat: e.target.value })}
              placeholder="Enter alamat"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Tanggal Lahir</FormLabel>
            <Input
              placeholder="Select Date"
              size="md"
              type="date"
              onChange={(e) =>
                setUser({ ...user, tanggal_lahir: e.target.value })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Phone</FormLabel>
            <InputGroup>
              <InputLeftAddon children="+62" />
              <Input
                type="tel"
                placeholder="Masukkan Nomor Telepon"
                onChange={(e) =>
                  setUser({ ...user, no_telepon: e.target.value })
                }
              />
            </InputGroup>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter email"
              type="email"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Posisi Pekerjaan</FormLabel>
            <Select
              placeholder="Pilih Posisi Pekerjaan"
              onChange={(e) =>
                setUser({ ...user, posisi: formatPosisi(e.target.value) })
              }
            >
              <option value="manajer_toko">Manajer Toko</option>
              <option value="kasir">Kasir</option>
              <option value="pramuniaga">Pramuniaga</option>
              <option value="staf_inventaris">Staf Inventaris</option>
              <option value="staf_pemasaran">Staf Pemasaran</option>
              <option value="staf_layanan_pelanggan">
                Staf Layanan Pelanggan
              </option>
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Tanggal Mulai Kerja</FormLabel>
            <Input
              placeholder="Select Date"
              size="md"
              type="date"
              onChange={(e) =>
                setUser({ ...user, tanggal_mulai_kerja: e.target.value })
              }
            />
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

export default AddStaffModal;
