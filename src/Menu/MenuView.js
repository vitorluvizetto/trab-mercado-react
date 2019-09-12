
import React from 'react';
import CustomerView from '../Customer/CustomerView';
import InternetView from '../InternetProduct/InternetView';
import ContractView from '../Contract/ContractView';
import SearchView from '../Search/SearchView';
import Container from '@material-ui/core/Container';
import alignDiv from '../css/style.css';
import Button from '@material-ui/core/Button';


export default class MenuView extends React.Component {
        constructor() {
                super();
                this.state = {
                        show: true,
                        itemMenu: ""
                };
        }
        hidingMenuToCustomer() {
                this.setState({ show: false })
                this.setState({ itemMenu: "customer" })
        }
        
        componentDidMount() {
                document.title = "Menu"
              }

        render() {
                return <Container fixed><div className="alignDiv">
                        {this.state.show ?
                                <Button className="alignButtonsTables" onClick={() => this.hidingMenuToCustomer()} variant="contained">
                                        <strong> Cliente </strong>
                                </Button> : ""}
                        {this.state.itemMenu == "customer" ? <CustomerView /> : ""}
                </div>
                </Container>
        }
}
