import './App.css';
import './index.css';
import './dist/output.css';
import ProductsList from './components/ProductsList/ProductsList';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
    const brands = ['Acer', 'Sony', 'Asus', 'MSI'];
    return (
        <div className="App bg-sky-950">
            <Layout className="layout">
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={brands.map((_, index) => {
                            const key = index + 1;
                            return {
                                key,
                                label: `${brands[index]}`,
                            };
                        })}
                    />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <ProductsList></ProductsList>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    );
}

export default App;
