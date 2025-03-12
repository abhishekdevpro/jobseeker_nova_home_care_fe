import React from 'react'
import Navbar from '../Header/Navbar'
import JobListingPage from '@/components/dashboard-pages/candidates-dashboard/dashboard/components/JoblistingPage'
import Footer from '../Footer/Footer'

const JobListing = () => {
  return (
    <>
      <Navbar />
      <JobListingPage />
      <Footer />
    </>
  )
}

export default JobListing