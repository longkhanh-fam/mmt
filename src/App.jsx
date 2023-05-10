import './App.css';
import './index.css';
import './dist/output.css';
import ProductsList from './components/ProductsList/ProductsList';
import { Breadcrumb, Layout, Menu } from 'antd';
import ProductData from './json/ProductData.json';
import react, { useState } from 'react';

const { Header, Content, Footer } = Layout;

function App() {
    const brands = ['All', 'Acer', 'Lenovo', 'Asus', 'MSI', 'Macbook', 'HP', 'Dell'];
    const initList = ProductData;
    const [productList, setProductList] = useState(ProductData);

    const filterList = (word) => {
        if (word === 'All') setProductList(ProductData);
        else {
            const filteredData = initList.filter((item) =>
                item.name.toLowerCase().includes(word.toLowerCase()),
            );
            setProductList(filteredData);
        }
    };

    function handleMenuSelect({ key }) {
        filterList(brands[key]);
    }

    return (
        <div className="App ">
            <Layout className="layout">
                <Header className="bg-gray-950">
                    <Menu
                        className="bg-gray-950"
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        onSelect={handleMenuSelect}
                        items={brands.map((_, index) => {
                            const key = index;
                            return {
                                key,
                                label: `${brands[index]}`,
                            };
                        })}
                    />
                </Header>
                <Content className="bg-gray-900" style={{ padding: '0 50px' }}>
                    <ProductsList productList={productList}></ProductsList>
                </Content>
                <Footer style={{ textAlign: 'center' }}>@2023 LONGKA CLONE</Footer>
            </Layout>
        </div>
    );
}

export default App;
