import { createSlice } from "@reduxjs/toolkit";

// Export static event data directly
export const EventData = [
  {
    id: 1,
    title: "Workshop",
    poweredBy: "zerodha",
    image: "https://media.gettyimages.com/id/1403918089/photo/business-leader-woman.jpg?s=612x612&w=0&k=20&c=h90SfLlof-dxsScM300BJh2x4JS8Esm-cFxnqXJEE4w=",
    description:
      "The Workshop is a finance-centric event designed to empower participants with practical financial skills. This event features hands-on sessions that teach essential financial tools and concepts such as investment strategies, financial modeling, and trading techniques. Participants will engage in real-world scenarios, utilizing tools like stock market simulators and financial analysis software to gain a deeper understanding of the intricacies of financial decision-making. Experts from the finance industry will guide participants, helping them sharpen their skills and better navigate the complex financial landscape.",
  },

  {
    id: 2,
    title: "Trade-a-thon",
    poweredBy: "Varsity",
    image:
      "https://media.gettyimages.com/id/1415672333/photo/indian-rupees-cash-banknotes-and-coins-and-stock-market-indicators.jpg?s=612x612&w=0&k=20&c=Gwn2shKC4W_BqQM7oMvvvRgYHcWTQnv_tWtyzhdwNtc=",
    description:
      "Trade-a-thon is a competitive finance event focused on simulating real-world trading environments. Participants will take on the role of traders, making decisions based on live market conditions and financial data. The event encourages participants to apply their knowledge of stock markets, derivatives, and trading algorithms in a fast-paced, high-pressure environment. By leveraging advanced financial strategies, participants will learn how to manage risk, optimize returns, and make quick, informed decisions under market volatility, preparing them for real-life trading challenges.",
  },

  {
    id: 3,
    title: "Budget-Pe-Charcha",
    poweredBy: "zerodha",
    image: "https://cdn.finshots.app/images/2024/07/BudgetNewsltterBOFM.jpg",
    description:
      "Budget-Pe-Charcha is an event that revolves around the analysis and discussion of national and global economic policies, especially focusing on the annual budget. The event brings together finance enthusiasts, analysts, and industry professionals to explore how budgetary decisions impact the financial markets, business strategies, and economic growth. Discussions will center on topics such as fiscal policy, taxation, government spending, and their implications on different sectors. Participants will gain insights into the financial planning process and learn how economic factors influence market dynamics.",
  },

  {
    id: 4,
    title: "Ideathon",
    poweredBy: "Varsity",
    image:
      "https://media.istockphoto.com/id/1051690398/photo/financial-growth-chart.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mb1Stzuw5_3YZFd5H6vqMbjOAOS3-8IfujWbftye_Bo=",
    description:
      "The Ideathon is an event aimed at generating innovative financial solutions that address current challenges in the finance industry. Participants will brainstorm and develop ideas that tackle real-world issues, such as improving financial inclusion, creating sustainable investment models, and enhancing financial literacy. By working on projects related to fintech, digital currencies, or investment strategies, participants will demonstrate how innovation can transform the financial sector. The Ideathon fosters creativity and entrepreneurial thinking, encouraging participants to develop viable financial solutions that can drive change and progress in the industry.",
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
