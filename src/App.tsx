import { ResetButton } from "./ResetButton";
import { ResourceProvider } from "./resource/ResourceProvider";
import { ResourceInterface } from "./resource/ResourceInterface";
import { RandomEventProvider } from "./event/randomEventProvider";
import { RichText } from "./interface/RichText";

const App = () => (
  // const [remainingDays, setRemainingDays] = useState(5);
  <ResourceProvider>
    <ResetButton />
    <ResourceInterface />
    <RandomEventProvider>
      <RichText />
    </RandomEventProvider>
  </ResourceProvider>
);

export { App };
