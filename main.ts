import CREAggregate from "./classes/CREAggregate";
import UsersPanel from "./UsersPanel";

const panel = new UsersPanel();
panel.addAggregate(new CREAggregate);
panel.show();