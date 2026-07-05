import { useState, useEffect } from "react";
function AddApplication({
  addApplication,
  editingApplication,
  editingIndex,
  setEditingApplication,
  setEditingIndex,
  applications,
  setApplications,
}) {
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("Applied");
    const [date, setDate] = useState("");
    useEffect(() => {
  if (editingApplication) {
    setCompany(editingApplication.company);
    setRole(editingApplication.role);
    setStatus(editingApplication.status);
    setDate(editingApplication.date);
  }
}, [editingApplication]);
    
  const handleAdd = () => {
  if (company.trim() === "" || role.trim() === "") {
    alert("Please fill all fields");
    return;
  }

  const newApplication = {
    company,
    role,
    status,
    date,
  };

  if (editingApplication) {
   fetch(`https://placement-pro-backend-9v779t1wk-nishitha-rai.vercel.app/applications/${editingApplication._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newApplication),
    })
      .then(async () => {
  const response = await fetch("https://placement-pro-backend-9v779t1wk-nishitha-rai.vercel.app/applications");
  const data = await response.json();
  setApplications(data);
})
      .catch(console.error);

    setEditingApplication(null);
    setEditingIndex(null);
  } else {
    addApplication(newApplication);
  }

  setCompany("");
  setRole("");
  setStatus("Applied");
  setDate("");
};
  
  return (
    <div className="form-container">
      <h2>Add New Application</h2>

      <input
  type="text"
  placeholder="Company Name"
  value={company}
  onChange={(e) => setCompany(e.target.value)}
/>

<input
  type="text"
  placeholder="Job Role"
  value={role}
  onChange={(e) => setRole(e.target.value)}
/>

     <button onClick={handleAdd}>
  {editingApplication ? "Save Changes" : "Add Application"}
</button>
      <p>Company: {company}</p>
<p>Role: {role}</p>
<select
  value={status}
  onChange={(e) => setStatus(e.target.value)}
>
  <option>Applied</option>
  <option>Interview</option>
  <option>Offer</option>
  <option>Rejected</option>
</select>

<input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>
    </div>
  );
}

export default AddApplication;