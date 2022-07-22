import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMemberById } from "../services/membersService";

function CustomerDetails() {
  const [membersDetails, setMembersDetails] = useState();
  const [loaded, setLoaded] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    async function load() {
      const member = await getMemberById(id);
      setMembersDetails(member);
      setLoaded(true);
    }
    load();
  }, []);

  return loaded ? (
    <>
      <div>
        <Link to={"/admin/dashboard"}>
          <button className="back-button">
            <span className="icon">{"< "}</span>
            Back
          </button>
        </Link>

        <div>
          <div>
            <img src="https://www.facebook.com/randomimagesbr" alt="random" />
          </div>
          <div>
            <span>Product Name: </span>
            <span>Product ID: </span>
          </div>
        </div>
        <div>
          <div>
            Customer Name:{" "}
            {`${membersDetails[0].first_name} ${membersDetails[0].last_name}`}
          </div>
          <div>Email: {`${membersDetails[0].email}`}</div>
          <div>
            Address: {`${membersDetails[0].address}`},{" "}
            {`${membersDetails[0].city}`},{`${membersDetails[0].postcode}`},{" "}
            {`${membersDetails[0].country}`}
          </div>
          <div>Phone Number: {membersDetails[0].telephone}</div>
        </div>
      </div>
    </>
  ) : (
    <div>loading...</div>
  );
}
export default CustomerDetails;
