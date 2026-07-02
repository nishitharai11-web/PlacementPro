function ApplicationList({
  applications,
  deleteApplication,
  editApplication,
}) {
  return (
    <div className="form-container">
      <h2>Applications</h2>

      {applications.length === 0 ? (
        <p>No applications added yet.</p>
      ) : (
        applications.map((app, index) => (
          <div key={index} className="card">
            <h3>🏢 {app.company}</h3>
            <p>💼 Role: {app.role}</p>
            <p className={`status ${app.status.toLowerCase()}`}>
  {app.status}
</p>
            <p>📅 Date: {app.date}</p>
            <button onClick={() => editApplication(app)}>
  ✏️ Edit
</button>
            <button onClick={() => deleteApplication(app._id)}>
  🗑 Delete
</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ApplicationList;