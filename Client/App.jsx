import Root from "./src";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreAllLogs();
  return <Root />;
}
