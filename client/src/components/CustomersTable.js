import { React, useEffect, useContext, useState } from "react";
import { MembersContext } from "../Contexts/MembersContext";
import { getMembers } from "../services/membersService";
import { useNavigate } from "react-router-dom";
import { CgSoftwareDownload } from "react-icons/cg";
import { CSVLink } from "react-csv";

const populateCsvData = (members) => {
  return members.map((member) => {
    return {
      id: member.id,
      fullName: member.first_name + " " + member.last_name,
      telephone: member.telephone,
      address: `${member.address}, ${member.city}, ${member.postcode}`,
    };
  });
};

function CustomersTable() {
  const { members, setMembers } = useContext(MembersContext);
  const [csvData, setCsvData] = useState(populateCsvData(members));
  const navigate = useNavigate();
  const headers = [
    { label: "Customer ID", key: "id" },
    { label: "Customer Name", key: "fullName" },
    { label: "Customer Phone", key: "telephone" },
    { label: "Customer Address", key: "address" },
  ];

  useEffect(() => {
    getMembers().then((members) => {
      setMembers(members);
      const result = populateCsvData(members);
      setCsvData(result);
    });
  }, [setCsvData, setMembers]);

  // Sort the customer table first name, last name or id number by ASC order
  const sortArray = (type) => {
    let sorted;
    if (type === "first-name") {
      sorted = []
        .concat(members)
        .sort((b, a) => b.first_name.localeCompare(a.first_name));
    } else if (type === "last-name") {
      sorted = []
        .concat(members)
        .sort((b, a) => b.last_name.localeCompare(a.last_name));
    } else {
      sorted = [].concat(members).sort((b, a) => b.id - a.id);
    }
    setMembers(sorted);
  };

  const handleRedirect = (customerId) => {
    navigate(`/admin/member/${customerId}`);
  };

  return (
    <div className="orders-tab">
      <div className="dropdown-menu-container">
        <div className="filter-by">
          <div className="dropdown-menu" id="sort-by">
            <select onChange={(e) => sortArray(e.target.value)}>
              <option selected="true" disabled="disabled">
                Sort by
              </option>
              <option value="first-name">First Name</option>
              <option value="last-name">Last Name</option>
              <option value="customer-id">Customer Id</option>
            </select>
          </div>
        </div>
        {csvData && csvData.length > 0 && (
          <CSVLink
            className="download"
            headers={headers}
            data={csvData}
            filename="customers.csv"
          >
            <CgSoftwareDownload />
          </CSVLink>
        )}
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

          {members.map((member) => {
            if (!member.isadmin) {
              return (
                <tr key={member.id} className="orders-table-row">
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
            }
            return <></>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CustomersTable;
