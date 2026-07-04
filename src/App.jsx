import axios from "axios";
console.log("Axios loaded:", axios);
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import DashboardCards from "./components/DashboardCards";
import AddApplication from "./components/AddApplication";
import ApplicationList from "./components/ApplicationList";
import SearchBar from "./components/SearchBar";
import AnalyticsChart from "./components/AnalyticsChart";
import ExportCSV from "./components/ExportCSV";
function App(){
 const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingApplication, setEditingApplication] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const addApplication = async (newApplication) => {
  try {
    await axios.post(
      "https://placement-pro-backend-fiyc2i9c7-nishitha-rai.vercel.app/applications",
      newApplication
    );

    const response = await axios.get(
      "https://placement-pro-backend-fiyc2i9c7-nishitha-rai.vercel.app/applications"
    );

    setApplications(response.data);
  } catch (error) {
  console.log(error);
  alert(error.message);

  if (error.response) {
    console.log(error.response.data);
  }
}
};
const deleteApplication = async (id) => {
  try {
    await axios.delete(`https://placement-pro-backend-fiyc2i9c7-nishitha-rai.vercel.app/applications/${id}`);

    const response = await axios.get(
      "https://placement-pro-backend-fiyc2i9c7-nishitha-rai.vercel.app/applications"
    );

    setApplications(response.data);
  } catch (error) {
    console.log(error);
  }
};
const editApplication = (application) => {
  setEditingApplication(application);
};
useEffect(() => {
  axios
    .get("https://placement-pro-backend-fiyc2i9c7-nishitha-rai.vercel.app/applications")
    .then((response) => {
      setApplications(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

const filteredApplications = applications.filter((app) =>
  app.company.toLowerCase().includes(search.toLowerCase())
);
  return (
    <>
    <Navbar />

    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
    <div className={darkMode ? "container dark" : "container light"}>
      <h1>Welcome to PlacementPro 🚀</h1><br></br>
      <p>Track all your placements and internships in one place.</p>
      
    <DashboardCards applications={applications} />
      <AddApplication
  addApplication={addApplication}
  editingApplication={editingApplication}
  editingIndex={editingIndex}
  setEditingApplication={setEditingApplication}
  setEditingIndex={setEditingIndex}
  applications={applications}
  setApplications={setApplications}
/>
      <SearchBar
  search={search}
  setSearch={setSearch}
/>
    <ApplicationList
  applications={filteredApplications}
  deleteApplication={deleteApplication}
  editApplication={editApplication}
/>
<ExportCSV applications={applications} />
<AnalyticsChart applications={applications} />
    </div>
    </>
  );
}

export default App;


