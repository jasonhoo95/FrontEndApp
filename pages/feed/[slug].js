import React from 'react';
import fetch from 'isomorphic-unfetch';
import Router, {withRouter} from 'next/router';
import Link from 'next/link';
 export default class loadApi extends React.Component {
    static async getInitialProps({  req, query, asPath, pathname }) {

        let res = await fetch(`http://localhost:3005/helloworld/${query.slug}`);
        let contriesObj = await res.json();
        return { contriesObj};
      }



   createMarkup() {
    return {__html: this.props.contriesObj.content};
  }
  constructor(props) {
    super(props);
   
    this.state = { title: [], returndiv: '', arrayvalue: [], submitted: false };
  }

  componentDidUpdate() {
  }

  componentDidMount(){
      console.log(this.props.contriesObj)
  }

 
  render() {
    return (
      <div>

      <section>
        <div className="yoyo">

        </div>
        <div dangerouslySetInnerHTML={this.createMarkup()} />
      </section>
      </div>
     
    );
  }
}

