import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Typography, TextField, Button } from "@mui/material";

import Navigation from "../../components/Navigation";

function CartoonForm() {
  const [formData, setFormData] = useState({ name: "", description: "" });

  const [title, setTitle] = useState("Create Cartoons");

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/cartoons/edit-cartoon") {
      const newTitle = `Create Cartoon - ${formData.name}`;

      setTitle(newTitle);
    }
  }, [formData.name, location.pathname]);

  useEffect(() => {
    if (location.pathname === "/cartoons/edit-cartoon") {
      setTitle("Edit Cartoon");
      const cartoon = JSON.parse(window.localStorage.getItem("currentCartoon"));
      if (cartoon === null) {
        navigate("/cartoons");
      } else {
        setFormData({ name: cartoon.title, description: cartoon.description });
      }
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    return function CleanUp() {
      window.localStorage.removeItem("currentCartoon");
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setFormData({ name: "", description: "" });
  };

  const handleFormChange = (e) => {
    const newFormData = { ...formData };

    newFormData[e.target.name] = e.target.value;

    setFormData(newFormData);
  };

  return (
    <>
      <Navigation />
      <Typography
        variant="h1"
        gutterBottom
        style={{ marginTop: 100, textAlign: "center" }}
      >
        {title}
      </Typography>
      <form
        variant="standard"
        style={{ textAlign: "center" }}
        sx={{
          "& > :not(style)": { m: 2, width: "25ch" },
        }}
      >
        <TextField
          id="filled-basic"
          variant="filled"
          value={formData.name}
          type="text"
          name="name"
          label="Name"
          style={{ marginLeft: 20 }}
          onChange={handleFormChange}
          color="secondary"
        />
        <TextField
          id="filled-basic"
          variant="filled"
          value={formData.description}
          type="text"
          name="description"
          label="Description"
          style={{ marginLeft: 20 }}
          onChange={handleFormChange}
          color="secondary"
        />

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={handleFormSubmit}
          style={{ marginLeft: 20 }}
        >
          Save
        </Button>
      </form>
    </>
  );
}

export default CartoonForm;
