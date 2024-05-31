import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, FormControl, FormLabel, IconButton, useToast } from "@chakra-ui/react";
import { FaUpload, FaSignInAlt, FaDownload } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [file, setFile] = useState(null);
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const toast = useToast();

  const handleLogin = () => {
    // Placeholder login logic
    setIsLoggedIn(true);
    toast({
      title: "Logged in successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Placeholder upload logic
    toast({
      title: "File uploaded successfully.",
      description: "Your unique download link is: https://example.com/download/unique-link",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSendOtp = () => {
    // Placeholder OTP send logic
    setIsOtpSent(true);
    toast({
      title: "OTP sent successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleVerifyOtp = () => {
    // Placeholder OTP verification logic
    toast({
      title: "OTP verified successfully. Download starting...",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        {!isLoggedIn ? (
          <>
            <Text fontSize="2xl">Login</Text>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleLogin}>
              Login
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="2xl">Upload File</Text>
            <FormControl id="file">
              <FormLabel>File</FormLabel>
              <Input type="file" onChange={handleFileUpload} />
            </FormControl>
            <Button leftIcon={<FaUpload />} colorScheme="teal" onClick={handleUpload} isDisabled={!file}>
              Upload
            </Button>
            <Text fontSize="2xl">Download File</Text>
            <Button leftIcon={<FaDownload />} colorScheme="teal" onClick={handleSendOtp}>
              Send OTP
            </Button>
            {isOtpSent && (
              <>
                <FormControl id="otp">
                  <FormLabel>OTP</FormLabel>
                  <Input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
                </FormControl>
                <Button colorScheme="teal" onClick={handleVerifyOtp} isDisabled={!otp}>
                  Verify OTP & Download
                </Button>
              </>
            )}
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
