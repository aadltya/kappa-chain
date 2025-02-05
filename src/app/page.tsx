import { Payroll } from "./components/Payroll";
import { SpotlightNew } from "./components/SpotlightNew";

export default function Home() {
  return (
    <div>
      <SpotlightNew />
      <Payroll />
    </div>
  );
}
