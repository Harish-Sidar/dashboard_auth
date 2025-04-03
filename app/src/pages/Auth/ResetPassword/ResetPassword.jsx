import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Cards from "../../../components/Cards";
import { Formik, Form, Field } from "formik";
import { object, ref, string } from "yup";

const ResetPassword = () => {
  const resetValidationSchema = object({
    password:string().min(6,"Password must be at least 6 characters")
  .required("password is required"),
  repeatPassword:string().oneOf([ref("password"),null],
  "Password must match").required("Pepeat password is required"),
  });

  return (
    <Container>
      <Center h="100vh">
        <Cards>

          <Text mt="4" fontWeight="medium" textStyle="h1">
            Reset password
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your your password
          
          </Text>
          <Formik
            initialValues={{
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={resetValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="8" spacing={6}>
                <Field name = "password">
                                        {({field,meta})=>(
                                            <FormControl isInvalid = {!!(meta.error && meta.touched)}>
                                            <FormLabel htmlFor='password' >New Password</FormLabel>
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
                                            <FormLabel htmlFor='repeatPassword' >New RepeatPassword</FormLabel>
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

                  <Button w="full" type="submit">
                    Reset Password
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Cards>
      </Center>
    </Container>
  );
};

export default ResetPassword;
