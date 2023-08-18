import React, {useState, useEffect, useRef, useId} from 'react'
import { Input, 
        FormControl,
        FormLabel,
        Link,
        Checkbox} 
from '@chakra-ui/react'
import PasswordInput from '../components/PeekPassword'
import RegisterToast from '../components/RegisterToast'
import { Link as LinkRoute} from "react-router-dom";


function Register() {
    const[register, setRegister] = useState({    
        // namaDepan: " ",
        // namaBelakang: " ",
        // username: " ",
        // email: " ",
        // password: " ",
        // confirmPassword: " ",
        // userAgreement: " "
    })
      
  return (
    <div className='w-full h-auto flex justify-center items-center'>
            <div className='max-w-lg border-2 rounded-lg  my-7 p-10 space-y-3 flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold text-green-500'>Register</h1>
                <p className='text-sm text-center text-green-800'>Silahkan Masukkan Username, Nama Lengkap, Email dan Password Anda untuk Membuat Akun Baru</p>

                <div className='flex flex-row gap-x-2'>
                    <FormControl>
                        <FormLabel>Nama Depan</FormLabel>
                        <Input placeholder="Masukkan Nama Depan" 
                                 _placeholder={{fontSize: 13}}
                                 onChange={(e) => setRegister({...register, namaDepan: e.target.value})}
                                type="text"
                                colorScheme="green"
                                focusBorderColor='green.500'>
                        </Input>    
                    </FormControl>

                    <FormControl>
                        <FormLabel>Nama belakang</FormLabel>
                        <Input placeholder="Masukkan Nama Belakang"
                                 _placeholder={{fontSize: 13}}
                                 onChange={(e) => setRegister({...register, namaBelakang: e.target.value})}
                                type="text"
                                colorScheme="green"
                                focusBorderColor='green.500'>
                        </Input>
                    </FormControl>
                </div>
                
                <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input placeholder="Masukkan Username" 
                            type="text"
                            colorScheme="green"
                            focusBorderColor='green.500'
                            _placeholder={{fontSize: 13}}
                            onChange={(e) => setRegister({...register, username: e.target.value})}
                            >
                        </Input>
                    </FormControl>

                {/* <div>
                    <button className='border border-green-700 px-3 py-1 rounded-lg'
                            onClick={handleClick}>Update Title!! </button>
                </div> */}

                <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder="Masukkan Email"
                                _placeholder={{fontSize: 13}}
                                onChange={(e) => setRegister({...register, email: e.target.value})} 
                                type="email"
                                colorScheme="green"
                                focusBorderColor='green.500'>
                        </Input>
                    </FormControl>

                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <PasswordInput focusBorderColor="green.500"
                                    placeholder="Masukkan Password"
                                    _placeholder={{fontSize: 13}}
                                    onChange={(e) => setRegister({...register, password: e.target.value})} 
                    ></PasswordInput>
                </FormControl>

                <FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <PasswordInput focusBorderColor="green.500"
                                    placeholder="Masukkan Konfirmasi Password"
                                    _placeholder={{fontSize: 13}}
                                    onChange={(e) => setRegister({...register, confirmPassword: e.target.value})}
                    ></PasswordInput>
                </FormControl>
                
                <div className='w-full block justify-start items-start'>
                    <Checkbox colorScheme='green'
                                onChange={(e) => setRegister({...register, userAgreement: e.target.checked})}
                    >
                        <p className='text-sm'>Saya setuju dengan
                            <Link color='green' textDecoration='underline'> Syarat dan Ketentuan</Link>
                        </p>
                    </Checkbox>
                </div>

                <RegisterToast title='Daftar' 
                                width='full'
                                backgroundColor= 'green.500'
                                color='white'
                                _hover='none'>
                </RegisterToast>

                <p className='text-sm'>Anda sudah memiliki akun?
                    <LinkRoute to={"/login"}>
                        <Link color='green' textDecoration='Highlight'> Login</Link>
                    </LinkRoute>
                </p>
             </div>
        </div>

        
  )
}


export default Register
