
import { Button, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
   
const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: #ff9800;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    background: #a8f0c2;
    color: black;
  }
`;
    

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained">Create Blog</StyledButton>
            </Link>
            
            {/* <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to={"/"}>
                                All Categories
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                        {category.type}
                                    </StyledLink>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable> */}
        </>
    )
}

export default Categories;