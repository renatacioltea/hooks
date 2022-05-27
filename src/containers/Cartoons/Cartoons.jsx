import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Modal, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Navigation from '../../components/Navigation';

import CartoonCard from './CartoonCard';
import './cartoonsStyle.css';

const cartoons = [
  {
    name: 'Sailor Moon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in fermentum et. Arcu cursus euismod quis viverra nibh cras pulvinar. Id aliquet risus feugiat in. Accumsan lacus vel facilisis volutpat.',
    image: 'https://picsum.photos/200',
  },
  {
    name: 'Tom & Jerry',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in fermentum et. Arcu cursus euismod quis viverra nibh cras pulvinar. Id aliquet risus feugiat in. Accumsan lacus vel facilisis volutpat.',
    image: 'https://picsum.photos/200',
  },
  {
    name: 'Curaj-Caine Fricos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in fermentum et. Arcu cursus euismod quis viverra nibh cras pulvinar. Id aliquet risus feugiat in. Accumsan lacus vel facilisis volutpat.',
    image: 'https://picsum.photos/200',
  },
  {
    name: 'Rick and Morty',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in fermentum et. Arcu cursus euismod quis viverra nibh cras pulvinar. Id aliquet risus feugiat in. Accumsan lacus vel facilisis volutpat.',
    image: 'https://picsum.photos/200',
  },
  {
    name: 'Cow and chicken',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in fermentum et. Arcu cursus euismod quis viverra nibh cras pulvinar. Id aliquet risus feugiat in. Accumsan lacus vel facilisis volutpat.',
    image: 'https://picsum.photos/200',
  },
];

function Cartoons() {
  const [open, setOpen] = useState(false);

  const [currentCartoon, setCurrentCartoon] = useState({});

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = (title, image, description) => {
    setOpen(!open);
    setCurrentCartoon({ title, image, description });
  };

  const handleEditForm = (title, image, description) => {
    window.localStorage.setItem(
      'currentCartoon',
      JSON.stringify({ title: title, image: image, description: description }),
    );
    navigate('/edit-cartoon');
  };

  return (
    <>
      <Navigation />
      <Typography variant="h1" gutterBottom style={{ marginTop: 100 }}>
        Cartoons
      </Typography>
      <Grid container spacing={2}>
        {cartoons.map((cartoon) => {
          return (
            <Grid item xs={3} key={cartoon.name}>
              <CartoonCard
                title={cartoon.name}
                image={cartoon.image}
                description={cartoon.description}
                handleOpenModal={handleOpenModal}
                handleEditForm={handleEditForm}
              />
            </Grid>
          );
        })}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalPosition">
          <Typography id="modal-modal-title" variant="h6" component="h2" className="modalContent">
            {currentCartoon.title}
          </Typography>
          <img src={currentCartoon.image} className="modalContent" />
          <Typography
            id="modal-modal-description"
            variant="body2"
            sx={{ mt: 2 }}
            className="modalContent"
          >
            {currentCartoon.description}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Cartoons;
