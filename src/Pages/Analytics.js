import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../component/Sidebar';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';

const columns = [
  { id: 'student_name', label: 'Student Name', minWidth: 170 },
  { id: 'father_name', label: 'Father Name', minWidth: 150 },
  { id: 'mother_name', label: 'Mother Name', minWidth: 150 },
  { id: 'dob', label: 'DOB', minWidth: 120, align: 'right' },
  { id: 'aadhar_no', label: 'AADHAR NO.', minWidth: 170, align: 'right' },
  { id: 'action', label: 'Action', minWidth: 170, align: 'right' },
];

function Analytics() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:3000/api/studentdata')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setRows(data))
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError('Failed to load data');
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (id) => {
     {
      fetch(`http://localhost:3000/api/studentdata/${id}`, {
        method: 'DELETE',
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error deleting data');
        }
       
        setRows(rows.filter(row => row.id !== Number(id))
      );
        
      })
      .catch((err) => {
        console.error('Error:', err);
        setError('Failed to delete data');
      });
    }
  };
  

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box sx={{ width: '100%', paddingTop: 10 }}>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Paper sx={{ width: '95%', overflow: 'hidden' }}>
              {error && <div style={{ color: 'red', padding: '10px' }}>{error}</div>}
              <TableContainer sx={{ maxHeight: 600 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                          {columns.map((column) => (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === 'action' ? (
                                <>
                                  <Link to={`/studentdata/${row.id}`}>
                                    <button
                                      style={{
                                        padding: '5px 10px',
                                        backgroundColor: '#007BFF',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        marginRight: '10px',
                                      }}
                                    >
                                      Edit
                                    </button>
                                  </Link>
                                  <button
                                    style={{
                                      padding: '5px 10px',
                                      backgroundColor: '#FF5733',
                                      color: '#fff',
                                      border: 'none',
                                      borderRadius: '5px',
                                      cursor: 'pointer',
                                    }}
                                    onClick={() => handleDelete(row.id)}
                                  >
                                    Delete
                                  </button>
                                </>
                              ) : (
                                row[column.id]
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Analytics;
