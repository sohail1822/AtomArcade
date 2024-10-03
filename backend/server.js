import express from 'express';
import axios from 'axios';
import cors from 'cors';

// dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000; // Or any port you prefer

// Enable CORS and allow requests from your frontend's origin
app.use(cors({
    origin: '*', // Replace this with your frontend's origin
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse incoming JSON requests
app.use(express.json());

// NVIDIA API endpoint
const invoke_url = 'https://health.api.nvidia.com/v1/biology/nvidia/molmim/generate';
const api_key = "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"; // Make sure this is set correctly

// Route to handle molecule generation
app.post('/generate-molecule', async (req, res) => {
    try {
        // Forward the request to NVIDIA API with necessary headers
        const response = await axios.post(invoke_url, req.body, {
            headers: {
                'Authorization': `Bearer ${api_key}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        // Log success message on successful API call
        console.log('Successfully called NVIDIA API and responded to frontend');

        // Send the API response back to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error calling NVIDIA API:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error calling NVIDIA API' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
