import { Box, Button, Card, Center, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Cards from '../../../components/Cards'
import { GiCheckMark } from "react-icons/gi";

const ForgotPasswordSent = () => {
  return (
<Center h="100vh" >
<Cards 
  p={{
    base :"4",
    md:"10"
}}
showCard = {true}
>
        <VStack spacing={6}>
            <Icon as={GiCheckMark} boxSize="48px" color="green" />
            <Text textStyle ="h4" fontWeight="medium" color = "p.black">
                Successful sent
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
                We Have sent instructiions on how to reset your password to {" "}
                <Box as ="b" color= "p.black">jennny.wilson@gmail.com </Box>If you didn't receive it, 
                please follow the instructions from 
                the email we have sent you an email verification to {" "}
            </Text>
          
        </VStack>
    </Cards>
</Center>
  )
}

export default ForgotPasswordSent