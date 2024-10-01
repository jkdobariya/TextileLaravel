import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "./pages/Dashboard.vue";
import Login from "./pages/Login.vue";
// import About from "@/pages/About.vue";
import Group from "./pages/group/Index.vue";
import GroupCreate from "./pages/group/Create.vue";
import GroupShow from "./pages/group/Show.vue";
import GroupEdit from "./pages/group/Edit.vue";

import Account from "./pages/account/Index.vue";
import AccountCreate from "./pages/account/Create.vue";
import AccountShow from "./pages/account/Show.vue";
import AccountEdit from "./pages/account/Edit.vue";

import Category from "./pages/category/Index.vue";
import CategoryCreate from "./pages/category/Create.vue";
import CategoryShow from "./pages/category/Show.vue";
import CategoryEdit from "./pages/category/Edit.vue";

import IncomeExpense from "./pages/incomeExpense/Index.vue";
import IncomeExpenseCreate from "./pages/incomeExpense/Create.vue";
import IncomeExpenseShow from "./pages/incomeExpense/Show.vue";
import IncomeExpenseEdit from "./pages/incomeExpense/Edit.vue";

import Order from "./pages/order/Index.vue";
import OrderCreate from "./pages/order/Create.vue";
import OrderShow from "./pages/order/Show.vue";
import OrderEdit from "./pages/order/Edit.vue";

import OrderItem from "./pages/orderItem/Index.vue";
import OrderItemCreate from "./pages/orderItem/Create.vue";
import OrderItemShow from "./pages/orderItem/Show.vue";
import OrderItemEdit from "./pages/orderItem/Edit.vue";

import Product from "./pages/product/Index.vue";
import ProductCreate from "./pages/product/Create.vue";
import ProductShow from "./pages/product/Show.vue";
import ProductEdit from "./pages/product/Edit.vue";

import Stock from "./pages/stock/Index.vue";
import StockCreate from "./pages/stock/Create.vue";
import StockShow from "./pages/stock/Show.vue";
import StockEdit from "./pages/stock/Edit.vue";

import Store from "./pages/store/Index.vue";
import StoreCreate from "./pages/store/Create.vue";
import StoreShow from "./pages/store/Show.vue";
import StoreEdit from "./pages/store/Edit.vue";

import StoreOrder from "./pages/storeorder/Index.vue";
import StoreOrderCreate from "./pages/storeorder/Create.vue";
import StoreOrderShow from "./pages/storeorder/Show.vue";
import StoreOrderEdit from "./pages/storeorder/Edit.vue";

import User from "./pages/user/Index.vue";
import UserCreate from "./pages/user/Create.vue";
import UserShow from "./pages/user/Show.vue";
import UserEdit from "./pages/user/Edit.vue";

import UserRole from "./pages/userrole/Index.vue";
import UserRoleCreate from "./pages/userrole/Create.vue";
import UserRoleShow from "./pages/userrole/Show.vue";
import UserRoleEdit from "./pages/userrole/Edit.vue";

import ReportCashflow from "./pages/reports/Cashflow.vue";
import ReportInventory from "./pages/reports/Inventory.vue";
import ReportPurchase from "./pages/reports/Purchase.vue";
import ReportSale from "./pages/reports/Sale.vue";

import ReportProduct from "./pages/reports/ProductReport.vue"
import About from "./pages/About.vue";

import Customer from "./pages/account/Customer.vue";
import Vendor from "./pages/account/Vendor.vue";

import { useUserStore } from "./stores/auth";

const routes = [

  { path: '/login', component: Login, name: 'login' },
  { path: '/dashboard', component: Dashboard, name: 'dashboard', meta: { requiresAuth: false  } },
  // {path: '/dashboard', component:Dashboard},
  { path: '/group', component: Group, name: 'group.index', meta: { requiresAuth: false  } },
  { path: '/group/create', component: GroupCreate, name: 'group.create', meta: { requiresAuth: false  } },
  { path: '/group/show/:id', component: GroupShow, name: 'group.show', meta: { requiresAuth: false  } },
  { path: '/group/edit/:id', component: GroupEdit, name: 'group.edit', meta: { requiresAuth: false  } },
  { path: '/account', component: Account, name: 'account.index', meta: { requiresAuth: false  } },
  { path: '/customer', component: Customer, name: 'customer.index', meta: { requiresAuth: false  } },
  { path: '/vendor', component: Vendor, name: 'vendor.index', meta: { requiresAuth: false  } },
  { path: '/account/create', component: AccountCreate, name: 'account.create', meta: { requiresAuth: false  } },
  { path: '/account/show/:id', component: AccountShow, name: 'account.show', meta: { requiresAuth: false  } },
  { path: '/account/edit/:id', component: AccountEdit, name: 'account.edit', meta: { requiresAuth: false  } },
  { path: '/category', component: Category, name: 'category.index', meta: { requiresAuth: false  } },
  { path: '/category/create', component: CategoryCreate, name: 'category.create', meta: { requiresAuth: false  } },
  { path: '/category/show/:id', component: CategoryShow, name: 'category.show', meta: { requiresAuth: false  } },
  { path: '/category/edit/:id', component: CategoryEdit, name: 'category.edit', meta: { requiresAuth: false  } },
  { path: '/income-expense', component: IncomeExpense, name: 'incomeExpense.index' },
  { path: '/income-expense/create', component: IncomeExpenseCreate, name: 'incomeExpense.create', meta: { requiresAuth: false  } },
  { path: '/income-expense/show/:id', component: IncomeExpenseShow, name: 'incomeExpense.show', meta: { requiresAuth: false  } },
  { path: '/income-expense/edit/:id', component: IncomeExpenseEdit, name: 'incomeExpense.edit', meta: { requiresAuth: false  } },
  { path: '/order', component: Order, name: 'order.index', meta: { requiresAuth: false  } },
  { path: '/order/create', component: OrderCreate, name: 'order.create', meta: { requiresAuth: false  } },
  { path: '/order/show/:id', component: OrderShow, name: 'order.show', meta: { requiresAuth: false  } },
  { path: '/order/edit/:id', component: OrderEdit, name: 'order.edit', meta: { requiresAuth: false  } },
  { path: '/orderItem', component: OrderItem, name: 'orderitem.index', meta: { requiresAuth: false  } },
  { path: '/orderItem/create', component: OrderItemCreate, name: 'orderitem.create', meta: { requiresAuth: false  } },
  { path: '/orderItem/show/:id', component: OrderItemShow, name: 'orderitem.show', meta: { requiresAuth: false  } },
  { path: '/orderItem/edit/:id', component: OrderItemEdit, name: 'orderitem.edit', meta: { requiresAuth: false  } },
  { path: '/product', component: Product, name: 'product.index', meta: { requiresAuth: false  } },
  { path: '/product/create', component: ProductCreate, name: 'product.create', meta: { requiresAuth: false  } },
  { path: '/product/show/:id', component: ProductShow, name: 'product.show', meta: { requiresAuth: false  } },
  { path: '/product/edit/:id', component: ProductEdit, name: 'product.edit', meta: { requiresAuth: false  } },
  { path: '/stock', component: Stock, name: 'stock.index', meta: { requiresAuth: false  } },
  { path: '/stock/create', component: StockCreate, name: 'stock.create', meta: { requiresAuth: false  } },
  { path: '/stock/show/:id', component: StockShow, name: 'stock.show', meta: { requiresAuth: false  } },
  { path: '/stock/edit/:id', component: StockEdit, name: 'stock.edit', meta: { requiresAuth: false  } },
  { path: '/store', component: Store, name: 'store.index', meta: { requiresAuth: false  } },
  { path: '/store/create', component: StoreCreate, name: 'store.create', meta: { requiresAuth: false  } },
  { path: '/store/show/:id', component: StoreShow, name: 'store.show', meta: { requiresAuth: false  } },
  { path: '/store/edit/:id', component: StoreEdit, name: 'store.edit', meta: { requiresAuth: false  } },
  { path: '/store-order', component: StoreOrder, name: 'storeorder.index' },
  { path: '/store-order/create', component: StoreOrderCreate, name: 'storeorder.create', meta: { requiresAuth: false  } },
  { path: '/store-order/show/:id', component: StoreOrderShow, name: 'storeorder.show', meta: { requiresAuth: false  } },
  { path: '/store-order/edit/:id', component: StoreOrderEdit, name: 'storeorder.edit', meta: { requiresAuth: false  } },
  { path: '/user', component: User, name: 'user.index', meta: { requiresAuth: false  } },
  { path: '/user/create', component: UserCreate, name: 'user.create', meta: { requiresAuth: false  } },
  { path: '/user/show/:id', component: UserShow, name: 'user.show', meta: { requiresAuth: false  } },
  { path: '/user/edit/:id', component: UserEdit, name: 'user.edit', meta: { requiresAuth: false  } },
  { path: '/user-role', component: UserRole, name: 'userrole.index', meta: { requiresAuth: false  } },
  { path: '/user-role/create', component: UserRoleCreate, name: 'userrole.create', meta: { requiresAuth: false  } },
  { path: '/user-role/show/:id', component: UserRoleShow, name: 'userrole.show', meta: { requiresAuth: false  } },
  { path: '/user-role/edit/:id', component: UserRoleEdit, name: 'userrole.edit', meta: { requiresAuth: false  } },
  { path: '/report/cashflow', component: ReportCashflow, name: 'report.cashflow', meta: { requiresAuth: false  } },
  { path: '/report/inventory', component: ReportInventory, name: 'report.inventory', meta: { requiresAuth: false  } },
  { path: '/report/product/:id', component: ReportProduct, name: 'report.product', meta: { requiresAuth: false  } },
  { path: '/report/purchase', component: ReportPurchase, name: 'report.purchase', meta: { requiresAuth: false  } },
  { path: '/report/sales', component: ReportSale, name: 'report.sale', meta: { requiresAuth: false  } },
  { path: '/about', component: About, name: 'about', meta: { requiresAuth: false  } },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const store = useUserStore();
    const token = store.token;
    const tokenz = localStorage.getItem('token');
    if (tokenz) {
      next();
    } else {
      // User is not authenticated, redirect to login
      next('/login');
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});
export default router;