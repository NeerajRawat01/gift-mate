import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { EventActionType } from "../../store/actions/actions.constants";
import { getDetailedEvent } from "../../store/selectors/event.selector";

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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const EventDetailPage: React.FC = () => {
  const params = useParams();
  const { eventId } = params;
  const event = useSelector(getDetailedEvent) as Event;
  // Prepare data for Recharts (contributor name and amount)
  const data = event?.contributors?.map((contributor) => ({
    name: contributor.contributorName,
    amount: contributor.amount,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (eventId)
      dispatch({
        type: EventActionType.FETCH_EVENT_BY_ID,
        payload: eventId,
      });
  }, [eventId]);
  const totalAmount = data?.reduce((acc, item) => acc + item.amount, 0);

  const pieData = data?.map((contributor) => ({
    name: contributor.name,
    value: Math.round((contributor.amount / totalAmount) * 100), // Percentage of total contributions (fixed to 0 decimal places)
  }));

  return (
    <div className="container px-10 mx-auto py-8">
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
      {data?.length > 0 ? (
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
      ) : (
        <div className="mt-8 text-center text-indigo-600 text-4xl">
          No Contribution Found
        </div>
      )}

      {/* Pie Chart - Percentage of Contributions */}
      {pieData?.length > 0 && (
        <div className="mt-8">
          <h2 className="text-3xl font-bold">
            Contribution Percentage Overview
          </h2>
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
                {pieData?.map((entry, index) => (
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
      )}

      {/* Contributor List */}
      {event?.contributors?.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Contributors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {event?.contributors?.map((contributor, index) => (
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
      )}

      {/* Delete and Contribute Buttons */}
      {/* <div className="mt-8 flex justify-end gap-4">
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            onClick={handleContribute}
        >
          Contribute
        </button>
      </div> */}
    </div>
  );
};

export default EventDetailPage;
