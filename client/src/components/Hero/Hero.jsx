import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { Skeleton, Box, Button, ButtonGroup, Card, Container, TextField, Typography, Alert } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { predictMBTI } from "../../utils/Api";
import Highlights from "../Highlights/Highlights";
import { ArrowRight, Send } from "@mui/icons-material";
import { pink, purple } from "@mui/material/colors";
import MBTI from "../../assets/MBTI/mbti.json";
const images = ["/assets/Variant-1.webp", "/assets/Variant-2.webp", "/assets/Variant-3.webp"];

const Hero = () => {
    const [bgImage, setBgImage] = useState(images[0]);
    const textRef = useRef();
    const [loading, setLoading] = useState(false);
    const [sampleRun, setSampleRun] = useState(null);
    const [inputText, setInputText] = useState("");
    const appWidth = window.innerWidth
    const [alertSignal, setAlertSignal] = useState("info");
    const [alertMessage, setAlertMessage] = useState("Submit text to check MBTI");

    const handlePredict = async () => {
        try {
            setLoading(true);
            console.log(inputText);
            const res = await predictMBTI(inputText);
            console.log(res);
            setSampleRun(res?.data);
            setAlertMessage("Your MBTI detected!");
            setAlertSignal("success");
        } catch (err) {
            console.log(err.message);
            setAlertMessage(err.message);
            setAlertSignal("error");
        } finally {
            setLoading(false);
        }
    };

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
                        fontWeight: 600,
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
                        fontWeight: 600,
                    }}
                    color="var(--mui-blue)"
                >
                    Your vibe.
                </Typography>
            </Box>
            <Typography
                align="center"
                sx={{
                    paddingTop: "1rem",
                    fontSize: "clamp(1rem, 1rem + 0.5vw, 1.5rem)",
                    width: { sm: "100%", md: "70%" },
                    textAlign: { sm: "left", md: "center" },
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
                    <Button size="large" variant="contained" endIcon={<EastIcon />}>
                        What is MBTI?
                    </Button>
                </a>
            </ButtonGroup>

            {/* Test */}
            <Box
                sx={{
                    pt: { xs: 4, sm: 12 },
                    pb: { xs: 8, sm: 12 },
                    mt: 10,
                }}
            >
                <Container
                    sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 3,
                    }}
                >
                    <Box
                        sx={{
                            width: { sm: "100%", md: "80%" },
                            textAlign: { sm: "left", md: "center" },
                        }}
                    >
                        <Typography component="h2" variant="h3" gutterBottom fontWeight={600}>
                            Test Yourself
                        </Typography>
                        <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.2rem" }}>
                            Want to know how we work? Jot down something about yourself- maybe a fun fact or how you are
                            feeling right now, and out model will detect your MBTI Type right away! Feel free to submit
                            any kind of text you would like to, we are not saving any of the data you provide here or
                            using it for any use other than predicting your type.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: { sm: "100%", md: "80%" },
                            display: "flex",
                            gap: 2,
                            height: "min-content",
                            justifyContent: "center",
                        }}
                    >
                        <TextField
                            id="outlined-basic"
                            label="Write something and see..."
                            variant="outlined"
                            sx={{
                                flexGrow: 1,
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: pink[500],
                                    },
                                    "&:hover fieldset": {
                                        borderColor: pink[500],
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: pink[500],
                                    },
                                },
                                "& .MuiInputLabel-root": {
                                    color: pink[500],
                                },
                            }}
                            ref={textRef}
                            size="small"
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            loading={loading}
                            onClick={handlePredict}
                            size="small"
                            endIcon={<Send />}
                            sx={{ bgcolor: pink[500] }}
                        >
                            {appWidth < 500 ? "" : "Predict My MBTI"}
                        </Button>
                    </Box>
                    <Alert severity={alertSignal} sx={{ width: { sm: "100%", md: "80%" } }}>
                        {alertMessage}
                    </Alert>

                    <Box
                        sx={{
                            width: { sm: "100%", md: "80%" },
                            gap: 2,
                            height: "min-content",
                            textAlign: "left",
                        }}
                    >
                        <Typography component="h5" variant="h5" gutterBottom fontWeight={600}>
                            Results Shown here
                        </Typography>
                        <div style={{ display: "flex", justifyContent: "start", flexWrap: "wrap", gap: "1.3rem" }}>
                            {loading && <Skeleton animation="wave" sx={{ width: "100%", height: 200, p: 0, m: 0 }} />}
                            {!loading &&
                                sampleRun &&
                                [0, 1, 2].map((i, key) => {
                                    return (
                                        <Card
                                            sx={{
                                                p: 3,
                                                width: {
                                                    md: "100%",
                                                    lg: "30%",
                                                },
                                            }}
                                            elevation={3}
                                            key={key}
                                        >
                                            <Typography
                                                sx={{ fontWeight: "medium", opacity: "50%" }}
                                                color= 'text.secondary'
                                            >
                                                Confidence of Model
                                            </Typography>
                                            <Typography color="text.primary" gutterBottom>{sampleRun?.confidences[i]}</Typography>
                                            <div>
                                                <Typography
                                                    gutterBottom
                                                    sx={{ fontWeight: "medium", fontSize: "1.2rem" }}
                                                >
                                                    {sampleRun?.predictions[i]}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                                    {MBTI[sampleRun?.predictions[i]].description}
                                                </Typography>
                                            </div>
                                        </Card>
                                    );
                                })}
                        </div>
                    </Box>
                </Container>
            </Box>

            <Highlights />
        </Box>
    );
};

export default Hero;
