//tenants only

import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import TenantSidebar from "../Components/tenant_sidebar";
import TenantNavbar from "../Components/tenant_navbar";

interface Ticket {
  id: number;
  title: string;
  description: string;
  upvotes: number;
}

const TenantTicketsPage: React.FC = () => {
  // Example ticket data (replace with API later)
  const [tickets, setTickets] = useState<Ticket[]>([
    { id: 1, title: "Broken Elevator", description: "The elevator in Building A is stuck.", upvotes: 5 },
    { id: 2, title: "Water Leakage", description: "Leak in the 3rd floor hallway.", upvotes: 3 },
    { id: 3, title: "WiFi Issues", description: "Slow internet in the lobby.", upvotes: 8 },
  ]);

  // Handle upvote
  const handleUpvote = (id: number) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === id ? { ...ticket, upvotes: ticket.upvotes + 1 } : ticket
      )
    );
  };

  return (
    <div className = "d-flex">
        {/* Sidebar */}
        <TenantSidebar/>
        <div className="flex-grow-1">
        <TenantNavbar page = "TICKETS"/>

            <div className="container mt-4">
            <div className="d-flex justify-content-between">
            <h2>Public Tickets</h2>
                <Button className="mb-3" href="/create-ticket">
                    + Create Ticket
                </Button>
            </div>


            {tickets.map((ticket) => (
                <Card key={ticket.id} className="mb-3 shadow-sm">
                <Card.Body>
                    <Card.Title>{ticket.title}</Card.Title>
                    <Card.Text>{ticket.description}</Card.Text>
                    <Button
                    variant="outline-primary"
                    onClick={() => handleUpvote(ticket.id)}
                    >
                    <i className="bi bi-hand-thumbs-up me-2"></i>
                    {ticket.upvotes}
                    </Button>
                </Card.Body>
                </Card>
            ))}
            </div>
        </div>
    </div>
  );
};

export default TenantTicketsPage;
