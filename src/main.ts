import CREAggregate from "./CRE/CREAggregate";
import UsersPanel from "./UsersPanel";

const panel = new UsersPanel();
panel.addAggregate(new CREAggregate);
panel.show();