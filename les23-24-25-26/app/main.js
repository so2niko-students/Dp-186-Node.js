import { ControllerMessage } from "./components/Message/ControllerMessage.js";
import { ControllerSearch } from "./components/Search/ControllerSearch.js";
import { ControllerPaginator } from "./components/Paginator/ControllerPaginator.js";
import { Publisher } from "./helpers/Publisher.js";

const publisher = new Publisher();
const msg = new ControllerMessage(publisher.methods);
const search = new ControllerSearch(publisher.methods);
const paginator = new ControllerPaginator(publisher.methods);