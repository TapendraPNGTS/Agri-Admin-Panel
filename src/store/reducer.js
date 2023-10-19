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

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    snackbar: snackbarReducer,
    cart: persistReducer(
        {
            key: 'cart',
            storage,
            keyPrefix: 'berry-'
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


    banner : bannerReducer,
    user : usersReducer,
    category : categoryReducer,
    product : productReducer,
    subCategory : subCategoryReducer,
});

export default reducer;
