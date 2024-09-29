import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Cell,
} from "recharts";

interface Contributor {
  contributorName: string;
  contributorEmail: string;
  amount: number;
}

interface Event {
  id: number;
  name: string;
  date: string;
  venue: string;
  description: string;
  imageUrl: string;
  contributors: Contributor[];
}

const event: Event = {
  id: 2,
  name: "Tech Conference 2024",
  date: "25th November 2024",
  venue: "San Francisco Convention Center",
  description:
    "A conference to showcase the latest in technology and innovation.",
  imageUrl: "https://via.placeholder.com/400x200.png?text=Tech+Conference",
  contributors: [
    {
      contributorName: "John Doe",
      contributorEmail: "john@example.com",
      amount: 500,
    },
    {
      contributorName: "Jane Smith",
      contributorEmail: "jane@example.com",
      amount: 600,
    },
    {
      contributorName: "Mark Turner",
      contributorEmail: "mark@example.com",
      amount: 450,
    },
    {
      contributorName: "Mark Turner2",
      contributorEmail: "mark@example.com",
      amount: 40,
    },
    {
      contributorName: "Mark Turner3",
      contributorEmail: "mark@example.com",
      amount: 200,
    },
    {
      contributorName: "Mark Turner2",
      contributorEmail: "mark@example.com",
      amount: 40,
    },
    {
      contributorName: "Mark Turner3",
      contributorEmail: "mark@example.com",
      amount: 200,
    },
  ],
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const EventDetailPage: React.FC = () => {
  // Prepare data for Recharts (contributor name and amount)
  const data = event.contributors.map((contributor) => ({
    name: contributor.contributorName,
    amount: contributor.amount,
  }));

  const totalAmount = data.reduce((acc, item) => acc + item.amount, 0);

  const pieData = data.map((contributor) => ({
    name: contributor.name,
    value: Math.round((contributor.amount / totalAmount) * 100), // Percentage of total contributions (fixed to 0 decimal places)
  }));

  return (
    <div className="container mx-auto py-8">
      {/* Event Details */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          className="w-full h-64 object-cover rounded-lg"
          src={event.imageUrl}
          alt={event.name}
        />
        <h1 className="text-4xl font-bold mt-6">{event.name}</h1>
        <p className="text-gray-700 mt-4">{event.description}</p>
        <p className="text-gray-600 mt-2">Date: {event.date}</p>
        <p className="text-gray-600 mt-2">Venue: {event.venue}</p>
      </div>

      {/* Bar Chart - Contribution Amount */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold">Contribution Amount Overview</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart - Percentage of Contributions */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold">Contribution Percentage Overview</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Contributor List */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Contributors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {event.contributors.map((contributor, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
              <p className="font-bold">{contributor.contributorName}</p>
              <p>{contributor.contributorEmail}</p>
              <p className="text-indigo-600 font-semibold">
                ${contributor.amount}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Delete and Contribute Buttons */}
      <div className="mt-8 flex justify-end gap-4">
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          //   onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          //   onClick={handleContribute}
        >
          Contribute
        </button>
      </div>
    </div>
  );
};

export default EventDetailPage;
