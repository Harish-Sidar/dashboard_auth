// import { Box, Button, Card, 
//     Center,
//     Checkbox,
//     Container,
//     FormControl,
//     FormErrorMessage,
//     FormLabel,
//     HStack,
//     Input, Stack, Text, 
//     useToast} 
// from '@chakra-ui/react'
// import React from 'react'
// import { Link } from 'react-router-dom'
// import {Formik,Form,Field} from "formik";
// import { object, string} from 'yup';
// import Cards from '../../../components/Cards';
// import { useMutation } from 'react-query';
// import { signinUser } from '../../../api/query/userQuery';


// const signinValidationSchema =object({

//   email:string().email("Email is invalid").required("Email is invalid"),
//   password:string().min(6,"Password must be at least 6 characters")
//   .required("password is required"),
 
// });
  

// const Signin = () => {
// const toast = useToast();
// const {mutate,isLoading} = useMutation({
//   mutationKey:["signin"],
//   mutationFn:signinUser,
//   onSuccess:(data)={},
//   onError:(error)=>{
//     toast({
//       title:"Signin Error",
//       description:error.message,
//       status:"error",
   
//     });
//   },


// });


//   return (
//     <Container>
//         <Center minH="100vh">
//         <Cards>

//             <Text fontWeight="medium" textStyle="h1">Welcome to Crypto App</Text>
//             <Text textStyle="p2" color="black.60" mt ="4">
//                 Enter your credentials to access the account.
//                 </Text>
//               <Formik initialValues={{
        
//                 email:"",
//                 password:"",
              
//               }}
              
//               onSubmit={(values)=>{
//                 mutate(values);
//               }}

//               validationSchema={signinValidationSchema}

//               >
//          {()=>(
//               <Form>
//               <Stack mt="10" spacing={6}>
                      
//                        <Field name = "email">
//                          {({field,meta})=>(
//                              <FormControl isInvalid = {!!(meta.error && meta.touched)}>
//                              <FormLabel htmlFor='email' >Email</FormLabel>
//                              <Input
//                              {...field}
//                              name = "email"
//                              type='email'
//                               placeholder='Enter your Email....'
//                               />
//                               <FormErrorMessage>{meta.error}</FormErrorMessage>
     
//                          </FormControl>
//                          )}
//                        </Field>
//                        <Field name = "password">
//                          {({field,meta})=>(
//                              <FormControl isInvalid = {!!(meta.error && meta.touched)}>
//                              <FormLabel htmlFor='password' >Password</FormLabel>
//                              <Input
//                              {...field}
//                              name = "password"
//                              type='password'
//                               placeholder='Enter your Password....'
//                               />
//                               <FormErrorMessage>{meta.error}</FormErrorMessage>
     
//                          </FormControl>
//                          )}
//                        </Field>
                        
//                       <HStack justify="space-between">
//                        <Checkbox>
//                            <Text textStyle="p3">
//                                Remeber me
//                            </Text>
//                            </Checkbox>
                           
//                             <Link to="/forget-password">
//                             <Text textStyle="p3" as="span" color="p.purple">
//                                 Forgot Password?
//                             </Text>
//                             </Link>
                           
                     
//                        </HStack>
//                        <Box>
//                        <Button isLoading = {isLoading} w="full" type='submit'>Login</Button>
//                        <Link to="/signup">
//                        <Button w="full" variant="outline" type='submit'>Create Account</Button>

//                        </Link>
//                         </Box> 

                     
//                    </Stack>
//               </Form>
//          )}
//               </Formik>
   
//             </Cards> 
//               </Center>
//     </Container>
//   )
// }

// export default Signin 








import { 
  Box, Button, Center, Checkbox, Container, 
  FormControl, FormErrorMessage, FormLabel, 
  HStack, Input, Stack, Text, useToast 
} from '@chakra-ui/react';

import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import { object, string } from 'yup';
import Cards from '../../../components/Cards';
import { useMutation } from 'react-query';
import { signinUser } from '../../../api/query/userQuery';

const signinValidationSchema = object({
  email: string().email("Invalid email format").required("Email is required"),
  password: string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Signin = () => {
  const toast = useToast();
  const { mutate, isLoading } = useMutation({
    mutationKey: "signin",
    mutationFn: signinUser,
    onSuccess: (data) => {
      console.log("Signin successful:", data);
    },
    onError: (error) => {
      toast({
        title: "Signin Error",
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
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your credentials to access the account.
          </Text>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => mutate(values)}
            validationSchema={signinValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="10" spacing={6}>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={meta.touched && meta.error}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input {...field} type="email" placeholder="Enter your Email..." />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={meta.touched && meta.error}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input {...field} type="password" placeholder="Enter your Password..." />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <HStack justify="space-between">
                    <Checkbox>
                      <Text textStyle="p3">Remember me</Text>
                    </Checkbox>
                    <Link to="/forget-password">
                      <Text textStyle="p3" as="span" color="p.purple">Forgot Password?</Text>
                    </Link>
                  </HStack>

                  <Box>
                    <Button isLoading={isLoading} w="full" type="submit">Login</Button>
                    <Link to="/signup">
                      <Button w="full" variant="outline">Create Account</Button>
                    </Link>
                  </Box>
                </Stack>
              </Form>
            )}
          </Formik>
        </Cards>
      </Center>
    </Container>
  );
};

export default Signin;
