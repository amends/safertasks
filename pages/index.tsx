import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import CallToActionWithAnnotation from '../components/CallToActionWithAnnotation'

const Home: NextPage = () => {
  return (
    <>
      <CallToActionWithAnnotation  />
  </>
  )
}

export default Home
