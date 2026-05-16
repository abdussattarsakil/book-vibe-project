import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from "../../components/ListBook/ReadList";
import WishList from "../../components/ListBook/WishList";

const Books = () => {

    return (
        <div className="container mx-auto mt-10">
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ReadList></ReadList>
                </TabPanel>
                <TabPanel>
                    <WishList></WishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;