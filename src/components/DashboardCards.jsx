function DashboardCards({ applications }) {

  const interviews = applications.filter(
    (app) => app.status === "Interview"
  ).length;

  const offers = applications.filter(
    (app) => app.status === "Offer"
  ).length;

  const rejections = applications.filter(
    (app) => app.status === "Rejected"
  ).length;

  return (
    <div className="cards-container">
      <div className="card">
        <h3>📄 Total Applications</h3>
        <h1>{applications.length}</h1>
      </div>

      <div className="card">
        <h3>🎯 Interviews</h3>
        <h1>{interviews}</h1>
      </div>

      <div className="card">
        <h3>✅ Offers</h3>
        <h1>{offers}</h1>
      </div>

      <div className="card">
        <h3>❌ Rejections</h3>
        <h1>{rejections}</h1>
      </div>
    </div>
  );
}

export default DashboardCards;