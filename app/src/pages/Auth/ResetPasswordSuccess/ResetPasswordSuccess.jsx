import { Box, Button, Card, Center, Container, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Cards from '../../../components/Cards'
import { BsPatchCheckFill} from "react-icons/bs";
import { Link } from 'react-router-dom';

const ResetPasswordSuccess = () => {
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
             Password Reset Done
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              Now you can access your account.
             </Text>
             <Box w="full">
                <Link to="/signin">
                <Button w="full">Signing</Button>
                </Link>
             </Box>
            
         </VStack>
     </Cards>

</Center>
</Container>
  )
}

export default ResetPasswordSuccess 