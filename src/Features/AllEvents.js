import { createSlice } from "@reduxjs/toolkit";

export const AllEventData = {
    "maffick":[
        {
            id: 1,
            title: "Decode Charts",
            description:"The club hosted a chart decoding event by FiNIT is a hands-on session where participants decode and interpret financial charts, such as stock price movements, candlestick patterns, or economic indicators. This event enhances analytical thinking, helping participants understand market trends, make informed decisions, and sharpen investment strategies.",
            image: "https://res.cloudinary.com/dju84uvhd/image/upload/v1741296995/IMG20241019113654_xlb9ho.jpg",
            poweredBy: "",
          },
            {
                id: 2,
                title: "KBC",
                description:"The KBC (Kaun Banega Crorepati) event by FiNIT is an exciting finance-themed quiz inspired by the popular TV show. Participants answer multiple-choice questions on finance, investments, and economics, with each correct answer taking them closer to the grand prize. This event tests participants' knowledge while encouraging quick thinking and decision-making under pressure.",
                image: "https://res.cloudinary.com/dju84uvhd/image/upload/v1741296997/IMG20241019120909_p6g3ro.jpg",
                poweredBy: "",
            },
            {
                id: 3,
                title: "Auction",
                description:"The Auction event by FiNIT is an engaging simulation where participants experience the thrill of bidding, buying, and strategizing in a competitive marketplace. This event aims to teach financial decision-making, resource management, and risk analysis in a fun and interactive way. Participants act as investors, bidding on assets or commodities, using limited resources to maximize value and returns.",
                image: "https://res.cloudinary.com/dju84uvhd/image/upload/v1741297642/IMG-20241020-WA0040_bds49x.jpg",
                poweredBy: "",
            },
            {
                id: 4,
                title: "Silk Route",
                description:"The Silk Route event by FiNIT offers a creative exploration of historical trade networks and their modern financial parallels. Participants simulate trade and negotiation scenarios, focusing on economic strategies, resource allocation, and collaboration. This event combines historical insights with practical financial skills, providing a unique learning experience in global trade and commerce.",
                image: "https://res.cloudinary.com/dju84uvhd/image/upload/v1741296995/IMG20241019114502_axoxwh.jpg",
                poweredBy: "",
            },
            {
                id: 5,
                title: "Hit The Bull’s Eye",
                description:"This thrilling event combines the excitement of darts with financial challenges. Participants aim at a custom dartboard, where each segment represents a financial concept, task, or question. Points are earned not just for accuracy but also for completing the associated financial challenge tied to the hit segment.",
                image: "https://res.cloudinary.com/dju84uvhd/image/upload/v1741296995/IMG20241019120359_tjmzzu.jpg",
                poweredBy: "",
            },
    ],
    "finvest":[
        {
            id: 1,
            title: "F-INVEST-2025",
            description:"",
            image: "",
            poweredBy: "",
          },
            {
                id: 2,
                title: "F-INVEST-2025",
                description:"",
                image: "",
                poweredBy: "",
            },
            {
                id: 3,
                title: "F-INVEST-2025",
                description:"",
                image: "",
                poweredBy: "",
            },
            {
                id: 4,
                title: "F-INVEST-2025",
                description:"",
                image: "",
            },
            {
                id: 5,
                title: "F-INVEST-2025",
                description:"",
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
        const { title, eventTitle } = action.payload; // Get title & id from dispatch

        const eventList = state.events[title] || []; // Get the event list by title
        state.selectedEvent = eventList.find(event => event.title === eventTitle) || null;
      },
    },
  });
  
  // Export actions and reducer
  export const { selectEvent } = EventsSlice.actions;
  export default EventsSlice.reducer;