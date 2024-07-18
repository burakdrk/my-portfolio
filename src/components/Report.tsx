import { useParams } from "react-router-dom";
import { reports } from "../data/reports";

export function Report() {
  const { id } = useParams();

  const report = reports.find((report) => report.id === Number(id));

  if (!report) {
    return <div>Report not found</div>;
  }

  return (
    <div className="max-w-[700px] mx-auto my-8">
      <h1 className="text-center font-bold text-2xl mb-10">
        <span style={{ color: report.color }}>{report.company}</span> - {report.position}
      </h1>
      {report.fragments.map((fragment, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-xl font-bold">{fragment.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: fragment.description }} />
        </div>
      ))}
    </div>
  );
}
