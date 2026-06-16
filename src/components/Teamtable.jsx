import "../CSS/table.css";
import team from "../team.json";

const TeamTableSection = ({ title, members }) => (
  <>
    <h3 className="text-center mb-6 text-xl tracking-tight font-bold text-amber-600 dark:text-white">
      {title}
    </h3>
    <div className="proj-table border-spacing-1 border-solid border-2 p-3 mb-12">
      <table className="w-full border border-black text-center rounded-sm overflow-scroll proj-table">
        <thead className="border border-black p-5">
          <tr>
            <th className="tableHeader w-1/5">S.N.</th>
            <th className="tableHeader w-2/5">Name</th>
            <th className="tableHeader w-2/5">Designation</th>
            <th className="tableHeader w-1/5">Area of Expertise</th>
            <th className="tableHeader w-1/5">Years of Experience</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, id) => (
            <tr key={`${title}-${id}`}>
              <td className="tableBody">{id + 1}.</td>
              <td className="tableBody">{member.Name}</td>
              <td className="tableBody text-left">{member.Designation}</td>
              <td className="tableBody">{member.Area}</td>
              <td className="tableBody">{member.Years}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

const Teamtable = () => {
  return (
    <div className="p-24 proj">
      <h2 className="text-center mb-4 text-2xl tracking-tight font-extrabold text-amber-500 dark:text-white pb-12">
        Team and Experts
      </h2>
      <TeamTableSection title="Office Team" members={team.officeTeam} />
      <TeamTableSection title="Associate Experts" members={team.experts} />
    </div>
  );
};

export default Teamtable;
