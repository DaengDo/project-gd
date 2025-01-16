import { ResetButton } from "./ResetButton";
import { ResourceProvider } from "./resource/ResourceProvider";
import { ResourceInterface } from "./resource/ResourceInterface";

const App = () => (
  // const [remainingDays, setRemainingDays] = useState(5);
  <ResourceProvider>
    <ResetButton />
    <ResourceInterface />
  </ResourceProvider>
);

export { App };
