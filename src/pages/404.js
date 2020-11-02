import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <div>
            <Layout>
                <Head title="Page not found"/>
                <h1>Page not found</h1>
                <p><Link to="/">Head home</Link></p>
            </Layout>
        </div>
    )
}

export default NotFound