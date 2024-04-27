"use client"

import React from 'react'
import {
    Command,
    CommandInput,
  } from "@/components/ui/command"
  

function Search() {
  return (
    <Command className='bg-gray-50'>
  <CommandInput placeholder="Search" />
</Command>

  )
}

export default Search