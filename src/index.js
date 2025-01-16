import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

function generateRandomNotes(count = 10) {
  const titles = ["Meeting", "Shopping List", "Idea", "Reminder", "Todo"];
  const contentPool = [
    "Discuss project updates",
    "Buy milk, eggs, and bread",
    "Plan for the new app feature",
    "Doctor appointment at 3 PM",
    "Clean the house",
    "Workout session at 6 AM",
    "Call mom",
    "Prepare presentation slides",
    "Finish reading the book",
    "Plan weekend trip",
  ];

  const randomDate = () => {
    const start = new Date(2022, 0, 1);
    const end = new Date();
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };

  const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const notes = Array.from({ length: count }, () => ({
    id: Math.random().toString(36).substr(2, 9), // Generate a random ID
    title: randomItem(titles),
    content: randomItem(contentPool),
    date: randomDate().toISOString().split("T")[0], // Format date as YYYY-MM-DD
  }));

  return notes;
}

app.get("/", (req, res) => {
  const randomTodoNumber = Math.floor(Math.random() * 10);
  const todod = generateRandomNotes(randomTodoNumber);
  res.json(todod);
});

app.listen(3333, () => {
  console.log("server started on 3333");
});
