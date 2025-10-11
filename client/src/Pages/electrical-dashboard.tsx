import React, { useState } from "react";

interface Ticket {
  id: number;
  title: string;
  description: string;
  tag: string;
  visibility: "public" | "private";
  upvotes: number;
  status: "open" | "resolved" | "closed";
}

const ElectricalDashboard: React.FC = () => {
  // Sample ticket data
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: 1,
      title: "Power outlet not working.",
      description: "The outlet near the kitchen isn't working.",
      tag: "Electrical",
      visibility: "private", // must match lowercase type
      upvotes: 3,
      status: "open",
    },
    {
      id: 2,
      title: "Hallway lights are out",
      description: "The hallway light bulb isn't turning on.",
      tag: "Electrical",
      visibility: "public",
      upvotes: 22,
      status: "open",
    },
  ]);

  const handleStatusChange = (
    id: number,
    newStatus: "open" | "resolved" | "closed"
  ) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        // if id matches, return ticket with new status, else return ticket
        ticket.id === id ? { ...ticket, status: newStatus } : ticket
      )
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-primary">Electrical Department Dashboard</h1>
      <p className="text-muted mb-4">
        View and manage all department-related tickets.
      </p>

      {tickets.length === 0 ? (
        // if no tickets
        <p className="text-muted">No tickets available.</p>
      ) : (
        // else render tickets
        <div className="list-group">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="list-group-item list-group-item-action mb-3 shadow-sm"
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-1">{ticket.title}</h5>
                <span
                  className={`badge ${
                    ticket.status === "open"
                      ? "bg-warning text-dark"
                      : ticket.status === "resolved"
                      ? "bg-success"
                      : "bg-secondary"
                  }`}
                >
                  {ticket.status.toUpperCase()}
                </span>
              </div>

              <p className="mb-1">{ticket.description}</p>

              <div className="d-flex justify-content-between align-items-center mt-3">
                <small className="text-muted">
                  Visibility: {ticket.visibility}
                </small>

                <div className="btn-group">
                  {ticket.status !== "resolved" && (
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() =>
                        handleStatusChange(ticket.id, "resolved")
                      }
                    >
                      Mark Resolved
                    </button>
                  )}
                  {ticket.status !== "closed" && (
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleStatusChange(ticket.id, "closed")}
                    >
                      Close Ticket
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ElectricalDashboard;
