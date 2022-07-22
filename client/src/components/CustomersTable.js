import { React, useEffect, useContext } from "react";
import { MembersContext } from "../Contexts/MembersContext";
import { getMembers } from "../services/membersService";
import { useNavigate } from "react-router-dom";

function CustomersTable() {
  const { members, setMembers } = useContext(MembersContext);
  const navigate = useNavigate();

  useEffect(() => {
    getMembers().then((members) => {
      setMembers(members);
    });
  }, [setMembers]);

  const handleRedirect = (customerId) => {
    navigate(`/admin/member/${customerId}`);
  };

  return (
    <div className="orders-tab">
      <div className="dropdown-menu-container">
        <div className="filter-by">
          <div className="dropdown-menu">
            <label className="status">Filter by status</label>
            <select>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="declined">Declined</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div className="dropdown-menu" id="sort-by">
            <label className="status">sort by</label>
            <select>
              <option value="first-name">First name</option>
              <option value="last-name">Last name</option>
            </select>
          </div>
        </div>
      </div>

      <table className="orders-table">
        <tbody className="orders-tbody">
          <tr>
            <th className="column-title">Customer ID</th>
            <th className="column-title">Customer Name</th>
            <th className="column-title">Customer Phone</th>
            <th className="column-title">Customer Address</th>
            <th className="column-title">Customer/Order Detail</th>
          </tr>

          {members.map((member, index) => {
            if (!member.isadmin)
              return (
                <tr key={index} className="orders-table-row">
                  <td className="order-id">{member.id}</td>

                  <td className="customer-name">{`${member.first_name} ${member.last_name}`}</td>

                  <td className="order-telephone">{member.telephone}</td>

                  <td className="order-address">{`${member.address}, ${member.city}, ${member.postcode}`}</td>
                  <td className="order-details">
                    <button
                      className="view-button"
                      onClick={() => handleRedirect(member.id)}
                    >
                      View {">"}
                    </button>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CustomersTable;
