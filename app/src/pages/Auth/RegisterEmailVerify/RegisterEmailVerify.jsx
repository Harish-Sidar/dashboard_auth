import { Box, Button, Card, Center, Container, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Cards from '../../../components/Cards'
import { MdEmail } from "react-icons/md";

const RegisterEmailVerify = () => {
  return (
<Container>
<Center h="100vh" >
<Card 
  p={{
    base :"4",
    md:"10"
}}
showCard = {true}
>
        <VStack spacing={6}>
            <Icon as={MdEmail} boxSize="48px" color="p.purple" />
            <Text textStyle ="h4" fontWeight="medium" color = "p.black">
                Email Verification
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
                We Have sent you an email verification to {" "}
                <Box as ="b" color= "p.black">jennny.wilson@gmail.com </Box>If you didn't receive it, 
                click the button below.
            </Text>
            <Button w="full" variant="outline">Re-Send Email</Button>
        </VStack>
    </Card>
</Center>
</Container>
  )
}

export default RegisterEmailVerify