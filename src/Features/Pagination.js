import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({ handleChange, currPage, totalPages }) {
    const handlePage = (e, value) => {
        handleChange(value)
    }

    return (
        <Stack spacing={2}>
            <Pagination id="PageBar" count={totalPages} variant="outlined" shape="rounded" page={currPage} onChange={handlePage} />
        </Stack>
    );
}
