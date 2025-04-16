import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { Alert, Box, Button, ButtonGroup, Input, TextField, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { predictMBTI } from "../../utils/Api";
const images = ["/assets/Variant-1.webp", "/assets/Variant-2.webp", "/assets/Variant-3.webp"];

const Hero = () => {
    const [bgImage, setBgImage] = useState(images[0]);
    const textRef = useRef();
    const [loading, setLoading] = useState(false);

    const [alertSignal, setAlertSignal] = useState("info")
    const [alertMessage, setAlertMessage] = useState("Submit text to check MBTI")

    const handlePredict = async()=>{
        try{
            setLoading(true);
            console.log(textRef?.current?.value)
            const res = await predictMBTI("I am feeling lucky")
            console.log(res)
            setAlertMessage("Your MBTI detected!")
            setAlertSignal("success")
        }catch(err){
            console.log(err.message)
            setAlertMessage(err.message)
            setAlertSignal("error")
        }finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        const interval = setInterval(() => {
            setBgImage((prev) => {
                const nextIndex = (images.indexOf(prev) + 1) % images.length;
                return images[nextIndex];
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <Box
            sx={{
                px: "0.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignitems: "center",
                    justifyContent: "center",
                    width: "90%",
                    flexWrap: "wrap",
                }}
                className="header-text"
            >
                <Typography
                    variant="h2"
                    sx={{
                        lineHeight: "1em",
                        fontSize: "clamp(3.2rem, 1.1667rem + 5.3333vw, 4rem)",
                        whiteSpace: "nowrap",
                        fontWeight: 500,
                    }}
                >
                    Your style.
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        lineHeight: "1em",
                        fontSize: "clamp(3.2rem, 1.1667rem + 5.3333vw, 4rem)",
                        whiteSpace: "nowrap",
                        fontWeight: 500,
                    }}
                    color="var(--mui-blue)"
                >
                    Your vibe.
                </Typography>
            </Box>
            <Typography
                align="center"
                sx={{
                    maxWidth: "70ch",
                    paddingTop: "1rem",
                    fontSize: "clamp(1rem, 1rem + 0.5vw, 1.5rem)",
                }}
                className="header-desc"
                color="text.secondary"
            >
                Welcome to the MBTI Predictor & Recommendations App—your personalized gateway to self-discovery and
                entertainment! Uncover your personality type and receive tailored recommendations to match your unique
                traits and interests.
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "1.5rem",
                    position: "relative",
                    py: "3rem",
                }}
                className="asset-section"
            >
                <div
                    className="hero"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                    }}
                ></div>
                <div className="comment"></div>
                <div className="post"></div>
                <div className="chat"></div>
                <div className="designer"></div>
            </Box>
            <ButtonGroup
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem 2rem",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "5px",
                    border: "1px solid grey",
                    marginTop: "-5rem",
                    zIndex: "20",
                    width: "min(400px, 100%)",
                }}
            >
                <a
                    href="https://www.themyersbriggs.com/en-US/Products-and-Services/Myers-Briggs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                        size="large"
                        variant="contained"
                        sx={{ backgroundColor: "var(--mui-blue)" }}
                        endIcon={<EastIcon />}
                    >
                        What is MBTI?
                    </Button>
                </a>
            </ButtonGroup>
            <Box
                sx={{
                    marginTop: "2rem",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignitems: "center",
                    flexDirection: "column",
                    border: "1px solid grey",
                    borderRadius: "5px",
                    textAlign: "center",
                    width: "min(100%, 40rem)",
                }}
            >
                <Typography variant="h5">Test yourself!</Typography>
                <Typography variant="body1">
                    Want to know how we work? Jot down something about yourself- maybe a fun fact or how you are feeling
                    right now, and out model will detect your API right away! Feel free to submit any kind of text you
                    would like to, we are not saving any of the data you provide here or using it for any use other than
                    predicting your type.
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="sample"
                    variant="outlined"
                    sx={{
                        margin: "1rem 0",
                    }}
                    ref={textRef}
                />
                <Box sx= {{display: "flex", gap: "1rem"}}>
                    <Button variant="contained" loading={loading} onClick={handlePredict}>Predict My MBTI!</Button>
                    <Alert severity="info">Submit to know your MBTI</Alert>
                </Box>
            </Box>
        </Box>
    );
};

export default Hero;
