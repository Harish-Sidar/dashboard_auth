import { Button, Card, 
    Center,
    Checkbox,
    Container,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input, Stack, Text, 
    useToast} 
from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Formik,Form,Field} from "formik";
import { object, string,ref} from 'yup';
import Cards from '../../../components/Cards';
import { useMutation } from 'react-query';
import { signupUser } from '../../../api/query/userQuery';

const signupValidationSchema =object({
  name:string().required("Name is required"),
  surname:string().required("surname is required"),
  email:string().email("Email is invalid").required("Email is invalid"),
  password:string().min(6,"Password must be at least 6 characters")
  .required("password is required"),
  repeatPassword:string().oneOf([ref("password"),null],
  "Password must match").required("Pepeat password is required"),
})
 

const Signup = () => {

const navigate = useNavigate();
  const toast = useToast();
    const { mutate, isLoading } = useMutation({
      mutationKey: "signup",
      mutationFn: signupUser,
      onSuccess: (data) => {
        console.log("Signup successful:", data);
      },
      onError: (error) => {
        toast({
          title: "Signup Error",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      },
    });



  return (
    <Container>
        <Center minH="100vh">
        <Cards>
            <Text fontWeight="medium" textStyle="h1">Welcome to Crypto App</Text>
            <Text textStyle="p2" color="black.60" mt ="4">
                Create a free account by filling data below.
                </Text>
              <Formik initialValues={{
                name:"",
                surname:"",
                email:"",
                password:"",
                repeatPassword:"",
              }}
              
              onSubmit={(values)=>{
                mutate({
                 
                  firstName:values.name,
                  lastName:values.surname,
                  email:values.email,
                  password:values.password,
               
                })
              }}

              validationSchema={signupValidationSchema}

              >
         {()=>(
              <Form>
              <Stack mt="10" spacing={6}>
                       <Flex gap="4">
                       <Field name = "name">
                         {({field,meta})=>(
                             <FormControl isInvalid = {!!(meta.error && meta.touched)}>
                             <FormLabel htmlFor='name' >Name</FormLabel>
                             <Input
                             {...field}
                             name = "name"
                              placeholder='Enter your name....'
                              />
                             <FormErrorMessage>{meta.error}</FormErrorMessage>
                         </FormControl>
                         )}
                       </Field>

                       <Field name = "surname">
                         {({field,meta})=>(
                             <FormControl isInvalid = {!!(meta.error && meta.touched)}>
                             <FormLabel htmlFor='surname' >Surname</FormLabel>
                             <Input
                             {...field}
                              name = "surname" 
                              placeholder='Enter your Surname....'
                              />
                           <FormErrorMessage>{meta.error}</FormErrorMessage>
                         </FormControl>
                         )}
                       </Field>
                     
                       </Flex>
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
                       <Field name = "password">
                         {({field,meta})=>(
                             <FormControl isInvalid = {!!(meta.error && meta.touched)}>
                             <FormLabel htmlFor='password' >Password</FormLabel>
                             <Input
                             {...field}
                             name = "password"
                             type='password'
                              placeholder='Enter your Password....'
                              />
                              <FormErrorMessage>{meta.error}</FormErrorMessage>
     
                         </FormControl>
                         )}
                       </Field>
                        <Field name = "repeatPassword">
                         {({field,meta})=>(
                             <FormControl isInvalid = {!!(meta.error && meta.touched)}>
                             <FormLabel htmlFor='repeatPassword' >RepeatPassword</FormLabel>
                             <Input
                             {...field}
                             name = "repeatPassword"
                             type='password'
                              placeholder='Enter your Repeatpassword....'
                              />
                              <FormErrorMessage>{meta.error}</FormErrorMessage>
     
                         </FormControl>
                         )}
                       </Field>
                      
                       <Checkbox>
                           <Text textStyle="p3">
                               I agree with{" "} 
                               <Text as="span" color="p.purple">
                                   Term and conditions
                               </Text>
                           </Text>
                       </Checkbox>
                       <Button  isLoading={isLoading} type='submit'>Create Account</Button>
                       <Text textStyle="p3" color="black.60" textAlign="center">
                           Already have an accoundt?{" "}
                           <Link to ="/signin">
                           <Text as ="span" color="p.purple">
                               Login
                           </Text>
                           </Link>
                       </Text>
                   </Stack>
              </Form>
         )}
              </Formik>
   
            </Cards> 
              </Center>
    </Container>
  )
}

export default Signup