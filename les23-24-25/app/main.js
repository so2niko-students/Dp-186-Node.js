import { ControllerMessage } from "./components/Message/ControllerMessage.js";
import { ControllerSearch } from "./components/Search/ControllerSearch.js";
import { Publisher } from "./helpers/Publisher.js";

const publisher = new Publisher();
const msg = new ControllerMessage(publisher.methods);
const search = new ControllerSearch(publisher.methods);