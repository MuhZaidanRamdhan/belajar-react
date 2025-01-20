import React from 'react'
import InputForm from '../Elements/Input'
import Button from '../Elements/Button'

function FormRegister() {
  return (
    <form action="">
    <InputForm
      label="Fullname"
      type="text"
      placeholder="insert your name here..."
      name="Fullname"
    />
    <InputForm
      label="Email"
      type="email"
      placeholder="example@example.com"
      name="Email"
    />
    <InputForm
      label="Confirm Password"
      type="password"
      placeholder="*********"
      name="Confirm Password"
    />
    <Button classname="bg-blue-600 w-full">Register</Button>
  </form>
  )
}

export default FormRegister
