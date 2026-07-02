import { saveAs } from "file-saver";

function ExportCSV({ applications }) {
  const exportCSV = () => {
    const headers = ["Company", "Role", "Status", "Date"];

    const rows = applications.map((app) => [
      app.company,
      app.role,
      app.status,
      app.date,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    saveAs(blob, "applications.csv");
  };

  return (
    <button onClick={exportCSV}>
      📄 Export CSV
    </button>
  );
}

export default ExportCSV;