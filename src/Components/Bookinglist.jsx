

    import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
    const Bookinglist = () => {
      const [bookings, setBookings] = useState([]);
    
      useEffect(() => {
        axios.get('http://localhost:3000/bookings')
      .then(response => setBookings(response.data));
      }, []);
    
      return (
        <header className='header'>
    <section>
    <div>
          <h1 className='rserve-title'>Bookings</h1>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Occation</TableCell>
            <TableCell align="right">Time&nbsp;(g)</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((bookings) => (
            <TableRow
              key={bookings.id}
              sx={{ '&:last-child td': { border: 0 } }}
            >
              <TableCell align="right">{bookings.date}</TableCell>
              <TableCell align="right">{bookings.occasion}</TableCell>
              <TableCell align="right">{bookings.noDinner} diners at {bookings.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          
        </div>
    </section>
    </header>
        
      );
    };
    
    export default Bookinglist;
    