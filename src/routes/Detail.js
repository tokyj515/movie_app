import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";

//영화를 클릭했을 때 나오는 상세페이지

class Detail extends React.Component{

    componentDidMount(){
        const{location, history} = this.props;
        
        if(location.state === undefined){ 
            history.push('/'); //리다이렉트
        }
    }



    render(){ //먼저 실행
        
        const {location} = this.props;
        if(location.state) {
            return <span>{location.state.title}</span>;
        }
        else{
            return null;
        }
      

    }
}




export default Detail;