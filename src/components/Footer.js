import React, {Component} from 'react';

export default class Footer extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Adewole'
        };
    }

    render(){
        return (
            <div className="bg-secondary">
                <div className="container">
                    <footer className="pt-4 my-md-5 pt-md-5 border-top border-gray">
                        <div className="row">
                            <div className="col-12 col-md">
                                <h5 className="mb-2 text-light font-weight-bold font-italic">WoodRoffe</h5>
                                <small className="d-block mb-3 text-gray">© 2017-2020</small>
                            </div>
                            <div className="col-6 col-md">
                                <h5 className="text-light">Solutions</h5>
                                <ul className="list-unstyled text-small">
                                    <li><a className="text-gray" href="/">Design Construction</a></li>
                                    <li><a className="text-gray" href="/">Construction Works</a></li>
                                    <li><a className="text-gray" href="/">House Renovation</a></li>
                                    <li><a className="text-gray" href="/">Construction</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md">
                                <h5 className="text-light">Resources</h5>
                                <ul className="list-unstyled text-small">
                                    <li><a className="text-gray" href="/">Blogs</a></li>
                                    <li><a className="text-gray" href="/">Using Guides</a></li>
                                    <li><a className="text-gray" href="/">Video Tutorial</a></li>
                                    <li><a className="text-gray" href="/">Help Center</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md">
                                <h5 className="text-light">Contact Info</h5>
                                <ul className="list-unstyled text-small">
                                <li><a className="text-gray" href="/">Team</a></li>
                                <li><a className="text-gray" href="/">Locations</a></li>
                                <li><a className="text-gray" href="/">Privacy</a></li>
                                <li><a className="text-gray" href="/">Terms</a></li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            
            
        );
    }
}