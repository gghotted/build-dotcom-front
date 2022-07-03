import { Container } from '@mui/material';

function SiteContainer(props) {
    return <Container maxWidth='md'>{props.children}</Container>
}

export default SiteContainer;