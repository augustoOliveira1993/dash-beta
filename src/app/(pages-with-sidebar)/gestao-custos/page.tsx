import {
  TabContent,
  TabList,
  TabPanel,
  TabTrigger,
  Tabs,
} from "@/components/ui/Tabs";

const MyComponent = () => {
  return (
    <div className="px-10">
      <Tabs defaultIndex={0}>
        <TabList>
          <TabTrigger index={0}>Valor 01</TabTrigger>
          <TabTrigger index={1}>Valor 02</TabTrigger>
          <TabTrigger index={2}>Valor 03</TabTrigger>
        </TabList>
        <TabContent>
          <TabPanel index={0}>Vretery</TabPanel>
          <TabPanel index={1}>Valor 02</TabPanel>
          <TabPanel index={2}>Valor 03</TabPanel>
        </TabContent>
      </Tabs>
    </div>
  );
};

export default MyComponent;
