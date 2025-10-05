// tenants only

import React, { useState, type FormEvent } from "react";

interface Ticket {
  id: number;
  title: string;
  description: string;
  tag: string;
  visibility: "public" | "private";
  upvotes: number;
  status: "open" | "resolved" | "closed";
}

const SubmitTicket: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: "",
    visibility: "public" as "public" | "private",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTicket: Ticket = {
      id: tickets.length + 1,
      title: formData.title,
      description: formData.description,
      tag: formData.tag,
      visibility: formData.visibility,
      upvotes: 0,
      status: "open",
    };
    setTickets([...tickets, newTicket]);
    setFormData({ title: "", description: "", tag: "", visibility: "public" });
  };

  const handleUpvote = (id: number) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id ? { ...ticket, upvotes: ticket.upvotes + 1 } : ticket
      )
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Tenant Tickets</h1>

      {/* Ticket Form */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h4 className="card-title mb-3">Submit a Ticket</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Tag/Category</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Plumbing, Security, Electrical"
                value={formData.tag}
                onChange={(e) =>
                  setFormData({ ...formData, tag: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Visibility</label>
              <select
                className="form-select"
                value={formData.visibility}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    visibility: e.target.value as "public" | "private",
                  })
                }
              >
                <option value="public">Public (visible to other tenants)</option>
                <option value="private">
                  Private (visible only to you & staff)
                </option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit Ticket
            </button>
          </form>
        </div>
      </div>

      {/* Tickets List */}
      <h3>Existing Tickets</h3>
      {tickets.length === 0 ? (
        <p className="text-muted">No tickets submitted yet.</p>
      ) : (
        <div className="list-group">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="list-group-item list-group-item-action mb-2 shadow-sm"
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-1">{ticket.title}</h5>
                <span
                  className={`badge ${
                    ticket.visibility === "public"
                      ? "bg-success"
                      : "bg-secondary"
                  }`}
                >
                  {ticket.visibility}
                </span>
              </div>
              <p className="mb-1">{ticket.description}</p>
              <small className="text-muted">Tag: {ticket.tag}</small>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span className="badge bg-info text-dark">
                  Status: {ticket.status}
                </span>
                {ticket.visibility === "public" && (
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handleUpvote(ticket.id)}
                  >
                    👍 Upvote ({ticket.upvotes})
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubmitTicket;
