import styles from "../page.module.css";
import FitnessCenter from "../components/fitnesscenter";

export default function Fitness() {
  const centers = [
    { name: "HNH", usage: 20, capacity: 80 },
    { name: "Noyes", usage: 40, capacity: 80 },
    { name: "Teagle", usage: 0, capacity: 80, status: "Down" },
  ];

  return (
    <div className={styles.fitnesspage}>
      <h1>Fitness Centers</h1>
      <div className="centers">
        {centers.map((center, index) => (
          <div>
            <FitnessCenter
              key={index}
              name={center.name}
              usage={center.usage}
              capacity={center.capacity}
              status={center.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
