import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.png";
import blog7 from "../assets/blog7.png";
import blog8 from "../assets/blog8.png";
import blog9 from "../assets/blog9.png";
import blog10 from "../assets/blog10.png";
import man from "../assets/man.png";

const BlogData = [
  {
    id: 2,
    title: "Migrating to linear 101",
    author: "Nebiyu Musbah",
    createdAt: new Date("2025-08-19"),
    description:
      "Linear helps stream line software projects, sprints, tasks & bug tracking. Here is how to get started!",
    image: blog2,
    authorImage: man,
  },
  {
    id: 3,
    title: "The Power of Morning Routines",
    author: "Abdulaziz Isa",
    createdAt: new Date("2023-09-05"),
    description:
      "Discover how a simple morning routine can boost productivity. Ready to transform your mornings?",
    image: blog3,
    authorImage: man,
  },
  {
    id: 4,
    title: "Meal Prep in Minutes: Fast, Fresh & Fuss‑Free!",
    author: "Emily Carter",
    createdAt: "2025-07-01T12:00:00Z",
    image: blog4,
    authorImage: man,
    description:
      "Why quick meal prep matters… Learn tips on how to save time and eat healthier.",
    content: `
<h2>Why Quick Meal Prep Matters</h2>
<p>In today’s fast‑paced world… your secret weapon.</p>
<h3>Time‑Saving Tips for Effortless Meal Prep</h3>
<ul>
  <li><strong>Plan Before You Chop</strong>: Write down your meals for the week.</li>
  <li><strong>Use Pre‑Cut Ingredients</strong>: Saves time when cooking.</li>
  <li><strong>Batch Cook Smart Staples</strong>: Cook quinoa or veggies in bulk.</li>
  <li><strong>Keep It Simple</strong>: Think stir‑fries, salads, bowls.</li>
  <li><strong>Invest in the Right Tools</strong>: Sharp knives and good containers matter.</li>
</ul>
<h3>Final Thoughts</h3>
<p>Meal prepping doesn’t mean boring leftovers… make your life easier one meal at a time.</p>
`,
  },
  {
    id: 5,
    title: "Stay Focused at Home",
    author: "Sophia Nguyen",
    createdAt: new Date("2023-09-05"),
    description:
      "Struggling with focus while working remotely? Try these proven strategies to stay motivated and productive.",
    image: blog5,
    authorImage: man,
  },
  {
    id: 6,
    title: "Journal for Clarity",
    author: "Sadam Hussien",
    createdAt: new Date("2025-08-19"),
    description:
      "Writing just a few minutes a day can improve mental clarity and reduce stress. Ready to start your journaling habit?",
    image: blog6,
    authorImage: man,
  },
  {
    id: 7,
    title: "Stretch at Your Desk",
    author: "John Smith",
    createdAt: new Date("2023-09-05"),
    description:
      "Sitting all day can cause stiffness—try these easy stretches to stay limber and pain-free.",
    image: blog7,
    authorImage: man,
  },
  {
    id: 8,
    title: "Try a Digital Detox",
    author: "Ryan Foster",
    createdAt: new Date("2023-09-05"),
    description:
      "Constant screen time draining your energy? Learn how a short digital detox can refresh your mind.",
    image: blog8,
    authorImage: man,
  },
  {
    id: 9,
    title: "Travel for Less",
    author: "Olivia Bennett",
    createdAt: new Date("2025-08-19"),
    description:
      "Traveling doesn’t have to break the bank. Discover smart ways to save on flights, stays, and more.",
    image: blog9,
    authorImage: man,
  },
  {
    id: 10,
    title: "Read More in 30 Days",
    author: "Daniel Harris",
    createdAt: new Date("2023-09-05"),
    description:
      "Always wanted to read more? This simple 30-day challenge will help you make reading a daily habit",
    image: blog10,
    authorImage: man,
  },
];

export default BlogData;
