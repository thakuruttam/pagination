import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';



export default function BasicTable({ data, perpage, total, pageNum, setPageNum }) {

    const handleChangePage = (event, newPage) => {
        setPageNum(newPage);
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead className="table-head">
                        <TableRow>
                            <TableCell style={{ color: "white" }} >Avatar</TableCell>
                            <TableCell style={{ color: "white" }} >First Name</TableCell>
                            <TableCell style={{ color: "white" }}>Last Name</TableCell>
                            <TableCell style={{ color: "white" }} >Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.length > 0 && data.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell >
                                    <Avatar alt={row.first_name} src={row.avatar} />
                                </TableCell>
                                <TableCell >
                                    {row.first_name}
                                </TableCell>
                                <TableCell >{row.last_name}</TableCell>
                                <TableCell >{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[6]}
                component="div"
                count={total}
                rowsPerPage={perpage}
                page={pageNum}
                onPageChange={handleChangePage}
            // onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    );
}
