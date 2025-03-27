import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Container,
    Paper,
    FormControl,
    FormHelperText,
    Divider,
    Alert,
    Stack,
    AlertTitle,
} from "@mui/material";
import { updateMember } from "../../utils/Auth";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

const LongTextForm = () => {
    const [formData, setFormData] = useState({
        howAreYou: "",
        whatDoYouLove: "",
        randomQuestion: "",
    });

    const [errors, setErrors] = useState({
        howAreYou: false,
        whatDoYouLove: false,
        randomQuestion: false,
    });

    const { user, showAlert } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: false,
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {
            howAreYou: formData.howAreYou.length < 20,
            whatDoYouLove: formData.whatDoYouLove.length < 20,
            randomQuestion: formData.randomQuestion.length < 20,
        };

        setErrors(newErrors);
        return !Object.values(newErrors).some((error) => error);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                // Form is valid, proceed with submission
                setLoading(true);
                console.log("Form submitted:", formData);
                const text = formData.howAreYou + " " + formData.randomQuestion + " " + formData.whatDoYouLove; // text to send to backend.

                const res = await updateMember({ text: text, _id: user._id });
                if (res.status === 200) {
                    showAlert("Data saved successfully!", "success");
                    console.log(res.data);
                    navigate("/dashboard");
                } else {
                    showAlert("Error while fetching MBTI Type and Saving Data", "error");
                    console.log(res.data);
                }
                // showAlert("Form submitted successfully!", "");
                // Here you would typically send the data to an API
            } catch (err) {
                showAlert("Error while fetching MBTI Type and Saving Data", "error");
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        } else {
            console.log("Form validation failed");
        }
    };

    const handleClearAll = () => {
        setFormData({
            howAreYou: "",
            whatDoYouLove: "",
            randomQuestion: "",
        });
        setErrors({
            howAreYou: false,
            whatDoYouLove: false,
            randomQuestion: false,
        });
    };

    return (
        <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Tell Us About Yourself
            </Typography>
            <Divider sx={{ my: 1 }} />

            <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                Please provide detailed responses to the following questions. Based on your responses, we will predict
                your Personality Type and recommend you Movies and Books you will definitely love!
            </Typography>
            <Alert color="info" sx={{ mb: 2 }}>
                <AlertTitle>Completing this step is Mandatory</AlertTitle>
                Completing this form is a mandatory step before we prepare a customised dashboard just for you. Please
                try to be as yourself as possible while answering.
            </Alert>

            <Box component="form" onSubmit={handleSubmit} noValidate>
                <FormControl fullWidth sx={{ mb: 3 }} error={errors.howAreYou}>
                    <TextField
                        label="How are you?"
                        name="howAreYou"
                        value={formData.howAreYou}
                        onChange={handleChange}
                        multiline
                        minRows={4}
                        maxRows={8}
                        fullWidth
                        variant="outlined"
                        required
                        placeholder="Describe in detail how you're feeling today..."
                    />
                    {errors.howAreYou && (
                        <FormHelperText>
                            Please provide a more detailed response (at least 20 characters)
                        </FormHelperText>
                    )}
                </FormControl>

                <FormControl fullWidth sx={{ mb: 3 }} error={errors.whatDoYouLove}>
                    <TextField
                        label="What do you love?"
                        name="whatDoYouLove"
                        value={formData.whatDoYouLove}
                        onChange={handleChange}
                        multiline
                        minRows={4}
                        maxRows={8}
                        fullWidth
                        variant="outlined"
                        required
                        placeholder="Tell us about the things you're passionate about..."
                    />
                    {errors.whatDoYouLove && (
                        <FormHelperText>
                            Please provide a more detailed response (at least 20 characters)
                        </FormHelperText>
                    )}
                </FormControl>

                <FormControl fullWidth sx={{ mb: 3 }} error={errors.randomQuestion}>
                    <TextField
                        label="If you could have any superpower, what would it be and why?"
                        name="randomQuestion"
                        value={formData.randomQuestion}
                        onChange={handleChange}
                        multiline
                        minRows={4}
                        maxRows={8}
                        fullWidth
                        variant="outlined"
                        required
                        placeholder="Be creative and explain your choice in detail..."
                    />
                    {errors.randomQuestion && (
                        <FormHelperText>
                            Please provide a more detailed response (at least 20 characters)
                        </FormHelperText>
                    )}
                </FormControl>

                <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2, gap: 2 }}>
                    <Button type="submit" variant="contained" size="large" loading={loading}>
                        Submit
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleClearAll}
                        disabled={!formData.howAreYou && !formData.whatDoYouLove && !formData.randomQuestion}
                    >
                        Clear All
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};

export default LongTextForm;
