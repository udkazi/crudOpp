# crudOpp

How to perform CRUD (restful) operation with React.

Install react app from official site.
https://reactjs.org/docs/installation.html

or follow this steps and make sure that you had installed nodeJs.

npm install -g create-react-app
create-react-app my-app
cd my-app
nam start

open app in browser in localhost://3000

import  bootstrap file in your app or you can import Bootstrap CDN file.
https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css

Online Deployed API
http://gentle-coast-86971.herokuapp.com/movie

Perfrom Crud operatoin with API.

//GET Method.

  fetch('http://gentle-coast-86971.herokuapp.com/new', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
           iData: responseJson
         })
      }).
      
    
 //Delete Method.
        this.state.iData.splice(index, 1);
        this.setState({iData:this.state.iData})
        var id = item._id;
        fetch('http://gentle-coast-86971.herokuapp.com/movie/'+id, {
               method: 'DELETE'
        })
    
  //POST Method.
  
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
      
   //PUT Method.
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
    
    //chnage value of Title
    onTitleChange(value){
        this.setState({
             title: value
        });
    }
  
    //chnage value of Url
    onUrlChange(value){
      this.setState({
           url: value
      });
    }
 
   For more Details Check Code and Watch online Tutorials on Youtube Web House.
 
 
