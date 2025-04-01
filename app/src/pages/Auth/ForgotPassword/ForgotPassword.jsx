import { Box, Button, Card, Center, HStack, Icon, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Cards from '../../../components/Cards'
import { Formik } from 'formik';

const ForgotPassword = () => {
  return (
<Center h="100vh" >
<Cards>

<Text fontWeight="medium" textStyle="h1">Forgot Password</Text>
<Text textStyle="p2" color="black.60" mt ="4">
    Enter your email address for which account you want to reset the password.
    </Text>
  <Formik initialValues={{

    email:"",
    password:"",
  
  }}
  
  onSubmit={(values)=>{
    console.log(values);
  }}

  validationSchema={signinValidationSchema}

  >
{()=>(
  <Form>
  <Stack mt="10" spacing={6}>
          
           <Field name = "email">
             {({field,meta})=>(
                 <FormControl isInvalid = {!!(meta.error && meta.touched)}>
                 <FormLabel htmlFor='email' >Email</FormLabel>
                 <Input
                 {...field}
                 name = "email"
                 type='email'
                  placeholder='Enter your Email....'
                  />
                  <FormErrorMessage>{meta.error}</FormErrorMessage>

             </FormControl>
             )}
           </Field>
          
            
        
           <Button w="full" type='submit'>Reset Password </Button>
         

         
       </Stack>
  </Form>
)}
  </Formik>

</Cards> 
</Center>
  )
}

export default ForgotPassword