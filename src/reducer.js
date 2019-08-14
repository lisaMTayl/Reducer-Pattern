export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const CLEAR_PURCHASED = 'CLEAR_PURCHASED';

export const initialState = {
  groceries: [
    {
      name: 'Bananas',
      id: 123,
      purchased: false
    },
    {
      name: 'Torillas',
      id: 124,
      purchased: false
    },
    {
      name: 'Milk',
      id: 1235,
      purchased: false
    },
    {
      name: 'Pizza Sauce',
      id: 1246,
      purchased: false
    },
    {
      name: 'Raw Honey',
      id: 1237,
      purchased: false
    },
    {
      name: 'Granola',
      id: 1248,
      purchased: false
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = {
        name: action.payload,
        id: Date.now(),
        purchased: false
      };
      return {
        ...state,
        groceries: [...state.groceries, newItem]
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        groceries: state.groceries.map(item => {
          if (action.payload === item.id) {
            return {
              ...item,
              // name: item.name,
              // id: item.id,
              // purchased: item.purchased,
              purchased: !item.purchased
            };
          }
          return item;
        })
      };
    case CLEAR_PURCHASED:
      return {
        ...state,
        groceries: state.groceries.filter(item => !item.purchased)
      };
    default:
      return state;
  }
};
