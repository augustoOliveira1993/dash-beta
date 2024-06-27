"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  ComponentProps,
} from "react";

interface TabsContextProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface TabsProps {
  defaultIndex?: number;
  children: ReactNode;
}

interface Props {
  index: number;
  children: React.ReactNode;
}

const TabsContext = createContext<TabsContextProps | null>(null);

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a TabsProvider");
  }
  return context;
};

const Tabs = ({ defaultIndex = 0, children }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

const TabList = ({ children }: ComponentProps<"div">) => {
  return <div className="tab-list flex">{children}</div>;
};

const TabTrigger = ({ index, children }: Props) => {
  const { activeIndex, setActiveIndex } = useTabsContext();
  const isActive = index === activeIndex;

  return (
    <button
      className={`px-4 py-2 border-b-2 transition-all ${isActive ? "border-blue-500 text-blue-500" : "text-gray-500"}`}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
};

const TabContent = ({ children }: ComponentProps<"div">) => {
  return <div className="tab-content">{children}</div>;
};

const TabPanel = ({ index, children }: Props) => {
  const { activeIndex } = useTabsContext();
  if (index !== activeIndex) {
    return null;
  }
  return <div className="tab-panel">{children}</div>;
};

export { Tabs, TabList, TabTrigger, TabContent, TabPanel };
