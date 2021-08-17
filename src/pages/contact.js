import React from 'react'
import '../../static/contact.css';
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'

class ContactIndex extends React.Component {
  
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo title="Contact Us" />
        <Hero title="Contact Us" />

        <div className="screen">
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
            </div>
            <div className="screen-body-item">
              <form action="/" name="contact" method="POST" data-netlify="true">
                <div className="app-form">
                  <div className="app-form-group">
                      <input className="app-form-control" placeholder="NAME" value=""/>
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="EMAIL"/>
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="CONTACT NO"/>
                    </div>
                    <div className="app-form-group message">
                      <input className="app-form-control" placeholder="MESSAGE"/>
                    </div>
                    <div className="app-form-group buttons">
                      <button className="app-form-button">CANCEL</button>
                      <button className="app-form-button">SEND</button>
                    </div>
                </div>
              </form>
              </div>
            </div>
          </div>
      </Layout>
    )
  }
}

export default ContactIndex

