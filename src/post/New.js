import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import SiteContainer from 'components/Container';
import { config } from 'config';
import { useLocation, useNavigate } from 'react-router-dom';

function New() {
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        await axios.post('/post/', {
            title: data.get('title'),
            content: data.get('content'),
        });
        location.state? navigate(location.from) : navigate(config.home_url);
    }
    return (
    <SiteContainer>
        <Box
            component={'form'}
            onSubmit={handleSubmit}
        >
            <TextField
                required
                id="title"
                label="제목"
                name="title"
            />
            <TextField
                required
                id="content"
                label="내용"
                name="content"
                multiline
                rows={10}
            />
            <Button type="submit" variant="contained" color='success'>저장</Button>
        </Box>
    </SiteContainer>
    )
}

export default New;