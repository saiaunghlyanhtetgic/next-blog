"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux"; 
import store from "../store/store"


function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient({
    defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, // default: true
        },
      },
  }));

  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
    </Provider>
  );
}

export default Providers;
