import { Box, Button, Card, Center, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Cards from '../../../components/Cards'
import { BsPatchCheckFill} from "react-icons/bs";
import { Link } from 'react-router-dom';

const RegisterSuccess = () => {
  return (
<Center h="100vh" >
<Cards>
        <VStack spacing={6}>
            <Icon as={BsPatchCheckFill} boxSize="48px" color="green" />
            <Text textStyle ="h4" fontWeight="medium" color = "p.black">
            Successfully Registration 
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
               Hurry! You have successfully create your account.
               Enter the app to explore all it's features
            </Text>
            <Box w="full">
              <Link to ="/signin">
              <Button w="full">Enter the app</Button>
              </Link>
            </Box>
        </VStack>
    </Cards>
</Center> 
  )
}

export default RegisterSuccess 

