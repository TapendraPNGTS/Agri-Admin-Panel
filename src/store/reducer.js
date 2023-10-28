// third-party
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// project imports
import snackbarReducer from './slices/snackbar';
import customerReducer from './slices/customer';
import contactReducer from './slices/contact';
// import productReducer from './slices/product';
import chatReducer from './slices/chat';
import calendarReducer from './slices/calendar';
import mailReducer from './slices/mail';
import userReducer from './slices/user';
import cartReducer from './slices/cart';
import kanbanReducer from './slices/kanban';
import menuReducer from './slices/menu';

import bannerReducer from '../redux/redux-slice/banner.slice'
import usersReducer from '../redux/redux-slice/user.slice'
import categoryReducer from '../redux/redux-slice/category.slice'
import productReducer from '../redux/redux-slice/product.slice'
import subCategoryReducer from '../redux/redux-slice/sub-category.slice'
import districtReducer from "../redux/redux-slice/district.slice";
import stateReducer from "../redux/redux-slice/state.slice";
import blockReducer from "../redux/redux-slice/block.slice";
import clusterReducer from "../redux/redux-slice/cluster.slice";
import attendenceReducer from "../redux/redux-slice/attendence.slice";
import holidayReducer from "../redux/redux-slice/holiday.slice";
import frenciseReducer from "../redux/redux-slice/frenchise.slice";
import frenciseStateReducer from "../redux/redux-slice/franchiseState.slice";
import frenciseDistrictReducer from "../redux/redux-slice/franchiseDistrict.slice";
import frenciseBlockReducer from "../redux/redux-slice/franchiseBlock.slice";
import frenciseClusterReducer from "../redux/redux-slice/franchiseCluster.slice";
import frenciseVillageReducer from "../redux/redux-slice/franchiseVillage.slice";
import roleReducer from "../redux/redux-slice/role.slice";
import staffReducer from "../redux/redux-slice/staff.slice";
import commissionReducer from "../redux/redux-slice/commission.slice";
import checkoutReducer from "../redux/redux-slice/checkOut.slice";
import codReducer from "../redux/redux-slice/cod.slice";
import orderReducer from '../redux/redux-slice/orderHistory.slice'

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  snackbar: snackbarReducer,
  cart: persistReducer(
    {
      key: "cart",
      storage,
      keyPrefix: "berry-",
    },
    cartReducer
  ),
  kanban: kanbanReducer,
  customer: customerReducer,
  contact: contactReducer,
  // product: productReducer,
  chat: chatReducer,
  calendar: calendarReducer,
  mail: mailReducer,
  user: userReducer,
  menu: menuReducer,

  banner: bannerReducer,
  user: usersReducer,
  category: categoryReducer,
  product: productReducer,
  subCategory: subCategoryReducer,
  district: districtReducer,
  state: stateReducer,
  block: blockReducer,
  cluster: clusterReducer,
  attendence: attendenceReducer,
  holiday: holidayReducer,
  role: roleReducer,
  frencise: frenciseReducer,
  franchiseState: frenciseStateReducer,
  franchiseDistrict: frenciseDistrictReducer,
  franchiseBlock: frenciseBlockReducer,
  franchiseCluster: frenciseClusterReducer,
  franchiseVillage: frenciseVillageReducer,
  role: roleReducer,
  staff: staffReducer,
  commission: commissionReducer,
  checkOut: checkoutReducer,
  cod: codReducer,
  orderHistory: orderReducer,
});

export default reducer;
