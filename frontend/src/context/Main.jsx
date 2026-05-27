"use client";
import { createContext, useContext, useState } from "react";

export const MainContext = createContext(null);

export const MainProvider = ({ children }) => {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  const [date, setDate] = useState(new Date());
  const [from, setFrom] = useState("La Paz");
  const [to, setTo] = useState("Cabo San Lucas");
  const [passengers, setPassengers] = useState(1);

  const [otherFrom, setOtherFrom] = useState("");
  const [toFrom, setToFrom] = useState("");

  return (
    <MainContext.Provider
      value={{
        backgroundLoaded,
        setBackgroundLoaded,
        date,
        setDate,
        from,
        setFrom,
        to,
        setTo,
        passengers,
        setPassengers,
        otherFrom,
        setOtherFrom,
        toFrom,
        setToFrom,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMainContext debe usarse dentro de un MainProvider");
  }
  return context;
};
