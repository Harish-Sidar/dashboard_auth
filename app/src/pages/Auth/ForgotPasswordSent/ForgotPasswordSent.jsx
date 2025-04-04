import { Box, Button, Card, Center, Container, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Cards from '../../../components/Cards'
import { BsPatchCheckFill} from "react-icons/bs";
import { Link } from 'react-router-dom';

const ForgotPasswordSent = () => {
  return (
    <Container>
<Center h="100vh" >

<Cards 
p={{
  base :"4",
  md:"10"
  }}
  showCard = {true}
  >
        <VStack spacing={6}>
            <Icon as={BsPatchCheckFill} boxSize="48px" color="green" />
            <Text textStyle ="h4" fontWeight="medium" color = "p.black">
            Successfully Sent
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
               A password reset link has been sent to your email address.
               Please check your inbox and follow the instructions to reset your password.
             </Text>
             <Box w="full">
               <Link to ="/signin">
               <Button w="full">Go to Sign In</Button>
               </Link>
             </Box>
         </VStack>
     </Cards>

</Center>
</Container>
  )
}

export default ForgotPasswordSent