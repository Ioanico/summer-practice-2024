import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Fab,
    Modal,
    Typography,
    TextField,
    FormControlLabel,
    Switch,
} from "@mui/material";
import Header from "../components/Header/Header";
import { useState } from "react";
import "./home.css";
import Recomandari from "../components/Recomandari/Recomandari";
import React from "react";

const Home = () => {
    const [open, setOpen] = useState(false);
    const [isSerie, setIsSerie] = useState(false);
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [watchedAt, setWatchedAt] = useState("");
    const [rating, setRating] = useState("");
    const [recommendations, setRecommendations] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSwitchChange = (event) => {
        setIsSerie(event.target.checked);
    };

    const handleSubmit = () => {
        const newRecommendation = {
            name,
            link,
            watchedAt,
            rating,
            isSerie,
        };
        setRecommendations([...recommendations, newRecommendation]);
        handleClose();

        setName("");
        setLink("");
        setWatchedAt("");
        setRating("");
        setIsSerie(false);
    };

    return (
        <div>
            <Header />
            <Recomandari />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {recommendations.map((rec, index) => (
                    <Card key={index} sx={{ margin: 2, width: 250 }}>
                        <CardContent>
                            <Typography variant="h5">{rec.name}</Typography>
                            {rec.link && (
                                <Typography variant="body2">
                                    <a href={rec.link}>Link</a>
                                </Typography>
                            )}
                            <Typography variant="body2">
                                Vizionat la: {rec.watchedAt}
                            </Typography>
                            <Typography variant="body2">
                                Rating: {rec.rating}
                            </Typography>
                            <Typography variant="body2">
                                {rec.isSerie ? "Serial" : "Film"}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
            <Fab
                id="FabIcon"
                color="primary"
                aria-label="add"
                onClick={handleOpen}
            >
                +
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    id="modal-content"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 10,
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2">
                        Ce film / serial recomanzi?
                    </Typography>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={isSerie}
                                onChange={handleSwitchChange}
                                name="serieSwitch"
                            />
                        }
                        label="Seriale"
                    />
                    <TextField
                        id="standard-basic"
                        label="Nume"
                        variant="standard"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {!isSerie && (
                        <TextField
                            id="standard-basic"
                            label="Link-ul Filmului"
                            variant="standard"
                            fullWidth
                            sx={{ mt: 2 }}
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    )}
                    <TextField
                        id="standard-basic"
                        label="Unde l-ai vizionat?"
                        variant="standard"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={watchedAt}
                        onChange={(e) => setWatchedAt(e.target.value)}
                    />
                    <TextField
                        id="standard-basic"
                        label="Rating"
                        variant="standard"
                        type="number"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                    <TextField
                        id="standard-basic"
                        label={
                            isSerie
                                ? "Cover Serial"
                                : "Cover Film(imd implementam)"
                        }
                        variant="standard"
                        disabled
                        fullWidth
                        sx={{ mt: 2 }}
                    />
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        sx={{ mt: 2 }}
                    >
                        Submit
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default Home;
