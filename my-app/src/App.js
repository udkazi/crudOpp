import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';


class App extends Component {

  constructor(props) {
        super(props);
        this.state = {
          iData:[],
          title:'',
          flag:true

        }}

  componentDidMount = () => {
      //get Funcationality
      fetch('http://gentle-coast-86971.herokuapp.com/new', {
             method: 'GET'
          })
          .then((response) => response.json())
          .then((responseJson) => {
             console.log(responseJson);
             this.setState({
               iData: responseJson
             })
          })
      }

    //delete Funcationlity
    clickMe(item,index){
        console.log(index);
        console.log(this.state.iData);
        this.state.iData.splice(index, 1);
        this.setState({iData:this.state.iData})
        var id = item._id;
        fetch('http://gentle-coast-86971.herokuapp.com/movie/'+id, {
               method: 'DELETE'
        })

      }


    submitMe(){

      var submitTitle = this.refs.title.value;
      var submitUrl = this.refs.url.value;
      var postData = {title:submitTitle,url:submitUrl};
      this.state.iData.push(postData);
      this.setState({iData:this.state.iData});
      console.log(this.state.iData);

      fetch("http://gentle-coast-86971.herokuapp.com/movie/", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        //make sure to serialize your JSON body
        body: JSON.stringify({
         title:submitTitle,url:submitUrl
        })
      })
      .then( (response) => {
         //do something awesome that makes the world a better place
         window.location.reload()
      });


    }

    editMe(item,index){
      console.log('editMe');
      console.log(item);
      console.log(item._id);

      this.setState({title:item.title,url:item.url,id:item._id,flag:false});



    }

    submitEdit(){

      fetch("http://gentle-coast-86971.herokuapp.com/movie/"+this.state.id, {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        //make sure to serialize your JSON body
        body: JSON.stringify({
         title:this.state.title,url:this.state.url
        })
      })
      .then( (response) => {
         //do something awesome that makes the world a better place
         window.location.reload()
      });
    }

    onTitleChange(value){
        this.setState({
             title: value
        });
    }

    onUrlChange(value){
      this.setState({
           url: value
      });
    }


  render() {
    return (
      <div className="">
        <header className="App-header App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Crud operations</h1>
        </header>


        {/* <div>
          &lt;header className=&quot;App-header App&quot;&gt;<br />
          &lt;img src={logo} className=&quot;App-logo&quot; alt=&quot;logo&quot; /&gt;<br />
          &lt;h1 className=&quot;App-title&quot;&gt;Welcome to React Crud operations&lt;/h1&gt;<br />
        &lt;/header&gt;
        </div> */}



        <br/>
        <div className="container">
          <div className="row">


            <div className="col-sm-6">
              <div className="styleForm" >
                <div className="form-group">
                  <label >Title</label>
                  <input onChange={e => this.onTitleChange(e.target.value)} ref="title" type="text" value={this.state.title} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title" />
                </div>
                <div className="form-group">
                  <label >Url</label>
                  <input onChange={e => this.onUrlChange(e.target.value)} ref="url" type="text" value={this.state.url} className="form-control" id="exampleInputPassword1" placeholder="Enter Url" />
                </div>


                {this.state.flag ? (
                  <button onClick={this.submitMe.bind(this)}  className="btn btn-primary" >Submit</button>
                 ) : (
                   <button onClick={this.submitEdit.bind(this)}  className="btn btn-primary" >Update </button>
                 )}







              </div>




            </div>


            <div className="col-sm-6">
              <div className="listView">

                <div className="row">
                  <div className="col-sm-3"><h5>Title</h5></div>
                  <div className="col-sm-3"><h5>Url</h5></div>
                  <div className="col-sm-3"></div>
                  <div className="col-sm-3"></div>
                </div>

                <hr/>

                {
                this.state.iData.map((item, index) => (

                  <div className="row" key={index}>
                    <div className="col-sm-3">
                      <p>
                      {item.title}
                      </p>
                    </div>
                    <div className="col-sm-3">
                      <p>
                      {item.url}
                      </p>
                    </div>
                    <div className="col-sm-3"> <span onClick={this.editMe.bind(this,item,index)} className="giveMeSpace">Edit</span> </div>
                    <div className="col-sm-3"> <span onClick={this.clickMe.bind(this,item,index)} className="giveMeSpace">Delete</span></div>
                  </div>

                ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
