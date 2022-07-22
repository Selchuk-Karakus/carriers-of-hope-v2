import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMemberById } from "../services/membersService";
import Calendar from "react-calendar";

function CustomerDetails() {
  const [membersDetails, setMembersDetails] = useState();
  const [loaded, setLoaded] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [pickUp, setPickUp] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [pickUpDate, setPickUpDate] = useState(new Date());

  const { id } = useParams();
  useEffect(() => {
    async function load() {
      const member = await getMemberById(id);
      setMembersDetails(member);
      setLoaded(true);
    }
    load();
  }, [id]);

  const handleOnChangeDelivery = () => {
    setDelivery(!delivery);
  };
  const handleOnChangePickUp = () => {
    setPickUp(!pickUp);
  };

  const handleOnChangeCancel = () => {
    setCancel(!cancel);
  };

  const onChangeDeliveryDate = (date) => {
    setDeliveryDate(date);
  };

  const onChangePickUpDate = (date) => {
    setPickUpDate(date);
  };

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
        <div>
          <input
            type="checkbox"
            id="delivery"
            name="delivery"
            value={delivery}
            checked={delivery}
            onChange={handleOnChangeDelivery}
          />
          Delivery
          <input
            type="checkbox"
            id="pickup"
            name="pickup"
            value={pickUp}
            checked={pickUp}
            onChange={handleOnChangePickUp}
          />
          Pick Up
          <input
            type="checkbox"
            id="cancel"
            name="cancel"
            value={cancel}
            checked={cancel}
            onChange={handleOnChangeCancel}
          />
          Cancel
        </div>
        <div>
          <Calendar onChange={onChangeDeliveryDate} value={deliveryDate} />
          <span>Date:</span>
          <Calendar onChange={onChangePickUpDate} value={pickUpDate} />
          <span>Date:</span>
        </div>
        <button>Done</button>
      </div>
    </>
  ) : (
    <div>loading...</div>
  );
}
export default CustomerDetails;
