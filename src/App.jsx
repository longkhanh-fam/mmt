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
            console.log(filteredData);
            setProductList(filteredData);
        }
    };

    function handleMenuSelect({ key }) {
        console.log(`Selected item key: ${brands[key]}`);
        filterList(brands[key]);
    }

    return (
        <div className="App bg-sky-950">
            <Layout className="layout">
                <Header>
                    <Menu
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
                <Content style={{ padding: '0 50px' }}>
                    <ProductsList productList={productList}></ProductsList>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    );
}

export default App;
