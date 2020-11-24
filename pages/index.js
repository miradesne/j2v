import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Homepage from '../components/homepage'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <>
    <Layout home>
        <Homepage />
    </Layout>
    </>
  )
}
