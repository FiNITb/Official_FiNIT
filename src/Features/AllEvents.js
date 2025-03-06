import { createSlice } from "@reduxjs/toolkit";

export const AllEventData = {
    "maffick":[
        {
            id: 1,
            title: "Maffick-24",
            descriptioin:"",
            image: "",
          },
            {
                id: 2,
                title: "Maffick-24",
                descriptioin:"",
                image: "",
            },
            {
                id: 3,
                title: "Maffick-24",
                descriptioin:"",
                image: "",
            },
            {
                id: 4,
                title: "Maffick-24",
                descriptioin:"",
                image: "",
            },
            {
                id: 5,
                title: "Maffick-24",
                descriptioin:"",
                image: "",
            },
    ],
    "finvest":[
        {
            id: 1,
            title: "F-INVEST-2025",
            descriptioin:"",
            image: "",
          },
            {
                id: 2,
                title: "F-INVEST-2025",
                descriptioin:"",
                image: "",
            },
            {
                id: 3,
                title: "F-INVEST-2025",
                descriptioin:"",
                image: "",
            },
            {
                id: 4,
                title: "F-INVEST-2025",
                descriptioin:"",
                image: "",
            },
            {
                id: 5,
                title: "F-INVEST-2025",
                descriptioin:"",
                image: "",
            },
    ],
}

// Create the slice
const EventsSlice = createSlice({
    name: "events",
    initialState: {
      events: AllEventData, // Static data
      selectedEvent: null, // Store selected event
    },
    reducers: {
      selectEvent: (state, action) => {
        const { title, id } = action.payload; // Get title & id from dispatch
        console.log(title, id);
        
        const eventList = state.events[title] || []; // Get the event list by title
        state.selectedEvent = eventList.find(event => event.id === id) || null;
      },
    },
  });
  
  // Export actions and reducer
  export const { selectEvent } = EventsSlice.actions;
  export default EventsSlice.reducer;