import React, { useEffect, useState } from "react";
import "../styles/dashboard-styles.css";
import "../styles/leaderboard-styles.css";
import SideNav from "../components/SideNav";
import { projectFirestore } from "../components/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const LEADERBOARD = (props) => {
  const [houses, setHouses] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const houseCollectionRef = collection(projectFirestore, "House");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsPending(true);
        console.log("Firestore instance:", projectFirestore);

        // Fetch data from Firestore
        const data = await getDocs(houseCollectionRef);
        setHouses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        setIsPending(false);
      } catch (error) {
        setError("Error fetching data: " + error.message);
        setIsPending(false);
      }
    };

    fetchData();
  }, [houses]); // Empty dependency array to run the effect only once on mount
  return (
    <div>
      <SideNav />
      <div className="containerDashboard1">
        <div className="containerDashboard2">
          <span className="text">
            <span>LEADERBOARD</span>
          </span>
        </div>
        <div>
          {error && <p className="error">{error}</p>}
          {/* {isPending === true && <p className="loading">Loading...</p>} */}

          {/* Render the data */}
          <ul className="house-list">
            {houses.map((house) => (
              <li key={house.id} className="house-item">
                {/* Render the specific properties of each house */}
                {house.Name} - {house.totalPoints}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LEADERBOARD;
