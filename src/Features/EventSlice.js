import { createSlice } from "@reduxjs/toolkit";

// Export static event data directly
export const EventData = [
  {
    id: 1,
    title: "Wall Street wizards",
    poweredBy: "FiNIT",
    image: "https://media.gettyimages.com/id/1403918089/photo/business-leader-woman.jpg?s=612x612&w=0&k=20&c=h90SfLlof-dxsScM300BJh2x4JS8Esm-cFxnqXJEE4w=",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },

  {
    id: 2,
    title: "F-INVEST",
    poweredBy: "Zerodha",
    image:
      "https://res.cloudinary.com/dju84uvhd/image/upload/v1741028608/WhatsApp_Image_2025-03-04_at_00.31.14_1468e460_z9exhy.jpg",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },


];

// Create the slice
const EventsSlice = createSlice({
  name: "events",
  initialState: {
    events: EventData, // Static data
    selectedEvent: null, // Store selected event
  },
  reducers: {
    selectEvent: (state, action) => {
      // Find and set the selected event by ID
      state.selectedEvent = state.events.find(
        (event) => event.id === action.payload
      );
    },
  },
});

// Export actions and reducer
export const { selectEvent } = EventsSlice.actions;
export default EventsSlice.reducer;
