import React, {Component} from 'react';
import './News.scss';
import NewsItem from '../../../components/NewsItem/NewsItem';
import {Context} from '../../../context/NewsContext';
class News extends Component{
   
    constructor(props){
        super(props);
        
    }
    
    render(){
        const { state } = this.context

        return <div className="news">
            {
                state.data.hits.map((item, index)=>{
                    return <NewsItem key={item.objectID} item={item}/>
                })
            }
            <div className="more">More</div>
        </div>
    }
}
News.contextType = Context;
export default News;