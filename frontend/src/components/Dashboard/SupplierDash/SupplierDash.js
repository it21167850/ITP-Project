import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const SupplierDash = () => {
  return (
    <div>SupplierDash
        <div> 
            <Link to="/supplierdash/supplier">
            <Button>supps</Button></Link></div>
    </div>
  )
}

export default SupplierDash

