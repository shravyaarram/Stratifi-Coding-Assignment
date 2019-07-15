import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '80px' }}
                    >

                        {
                            this.props.isAuthenticated ?

                                <Menu.Item key="2" onClick={this.props.logout}>
                                    Logout
                                </Menu.Item>

                                :

                                <Menu.Item key="2">
                                    <Link to="/">Login</Link>
                                </Menu.Item>

                        }

                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>

                    <div style={{ background: '#ADD8E6', padding: 24, minHeight: 280 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    STRATiFi Technologies
                </Footer>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));