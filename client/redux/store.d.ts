import { Store } from '@reduxjs/toolkit';
import rootReducer from './store';  // Import the root reducer if you have one

declare const store: Store<typeof rootReducer>;  // Specify your root reducer type here if applicable
export default store;
