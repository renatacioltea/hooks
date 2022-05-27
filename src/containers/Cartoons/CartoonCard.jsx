import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

import './cartoonsStyle.css';

function CartoonCard({ title, image, description, handleOpenModal, handleEditForm }) {
  const handleDetailsButton = () => {
    handleOpenModal(title, image, description);
  };

  const handleEditButton = () => {
    handleEditForm(title, image, description);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <img src={image} className="img" />
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDetailsButton} color="primary">
            <VisibilityIcon />
          </IconButton>
          <IconButton aria-label="edit" color="primary" onClick={handleEditButton}>
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

export default CartoonCard;
