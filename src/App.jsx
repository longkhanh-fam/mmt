import './App.css';
import './index.css';
import './dist/output.css';
import ProductsList from './components/ProductsList/ProductsList';
import { Breadcrumb, Layout, Menu } from 'antd';
import ProductData from './json/ProductData.json';
import react, { useState } from 'react';

const { Header, Content, Footer } = Layout;

function App() {
    const laptopBrands = ['All', 'Acer', 'Lenovo', 'Asus', 'MSI', 'Macbook', 'HP', 'Dell'];
    const phoneBrands = ['All', 'Nokia', 'Lenovo'];
    const tabletBrands = ['All', 'Acer', 'tungdeptrai'];
    const productLayout = ['Laptop', 'Phone', 'Tablet'];

    const [brands, setBrands] = useState(laptopBrands);

    const [initList, setInitList] = useState(ProductData);
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

    const handleChangeProduct = () => {};

    function handleMenuSelect({ key }) {
        filterList(brands[key]);
    }

    function handleLayoutSelect({ key }) {
        if (key === '0') {
            setBrands(laptopBrands);
        }
        if (key === '1') {
            setBrands(phoneBrands);
        }
        if (key === '2') {
            setBrands(tabletBrands);
        }
        console.log(productLayout[key]);
        console.log(brands);
    }

    return (
        <div className="App ">
            <Layout className="layout">
                <Header className="bg-gray-950">
                    <Menu
                        className="bg-gray-950"
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['0']}
                        onSelect={handleLayoutSelect}
                        items={productLayout.map((_, index) => {
                            const key = index;
                            return {
                                key,
                                label: `${productLayout[index]}`,
                            };
                        })}
                    />
                </Header>
                <Header className="bg-gray-950">
                    <Menu
                        className="bg-gray-950"
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['0']}
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
                <Footer className="bg-gray-950 text-gray-50" style={{ textAlign: 'center' }}>
                    @2023 LONGKA CLONE
                </Footer>
            </Layout>
        </div>
    );
}

export default App;
