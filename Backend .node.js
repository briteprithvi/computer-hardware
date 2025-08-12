const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Sample tutorial data
const tutorials = [
  {
    id: 1,
    title: "Replace Laptop Battery",
    description: "Step-by-step guide to safely replace your laptop battery.",
    imageUrl: "http://localhost:5000/images/laptop_battery.jpg",
    videoUrl: "http://localhost:5000/videos/laptop_battery_tutorial.mp4"
  }
];

// Serve static files
app.use('/images', express.static('public/images'));
app.use('/videos', express.static('public/videos'));

// API endpoint to get tutorials
app.get("/api/tutorials", (req, res) => {
  res.json(tutorials);
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
