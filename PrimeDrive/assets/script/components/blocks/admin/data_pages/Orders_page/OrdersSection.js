import { FilterOrders } from "./blocks/FilterOrders.js";
import { OrdersStats } from "./blocks/OrdersStats.js";
import { OrdersTable } from "./blocks/OrdersTable.js";
import { SearchOrder } from "./blocks/SearchOrder.js";

const SectionContent =
        `${OrdersStats}
        ${FilterOrders}
        ${SearchOrder}
        ${OrdersTable}`;

export const OrdersSection = SectionContent;