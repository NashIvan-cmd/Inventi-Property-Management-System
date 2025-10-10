// TENANT ACCESS ONLY
import { Table, Button } from "react-bootstrap";
import TenantSidebar from "../Components/tenant_sidebar";
import TenantNavbar from "../Components/tenant_navbar";

const TenantBillings: React.FC = () => {
  return (
    <div className= "d-flex">
      <TenantSidebar/>
      <div className="flex-grow-1">
          {/* Navbar */}
          <TenantNavbar page = "BILLINGS"/>
        <div className="container mt-4">
          <h2>Payments</h2>
          <p className="text-muted">View and manage your billing history.</p>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Month</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Receipt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>September 2025</td>
                <td>₱12,000</td>
                <td className="text-success">Paid</td>
                <td><Button variant="outline-primary" size="sm">Download</Button></td>
              </tr>
              <tr>
                <td>October 2025</td>
                <td>₱12,000</td>
                <td className="text-danger">Unpaid</td>
                <td>—</td>
              </tr>
            </tbody>
          </Table>

          <Button variant="success">Pay Now</Button>
        </div>
      </div>
    </div>
  );
};

export default TenantBillings;
