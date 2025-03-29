import { Button, Card, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Cards from '../../../components/Cards'
import { MdEmail } from "react-icons/md";

const RegisterEmailVerify = () => {
  return (
    <Cards>
        <VStack spacing={6}>
            <Icon as={MdEmail} boxSize="48px" color="p.purple" />
            <Text textStyle ="h4" color = "p.black">
                Email Verification
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
                We Have sent you an email verification to 
                jennny.wilson@gmail.com If you didn't receive it, click the button below.
            </Text>
            <Button w="full" variant="outline">Re-Send Email</Button>
        </VStack>
    </Cards>
  )
}

export default RegisterEmailVerify