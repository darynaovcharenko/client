import React from 'react';
import NewsService from '../services/NewsService';

class NewsComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            news:[]
        }
    }

    componentDidMount(){
        NewsService.getNews().then((response) => {
            this.setState({ news: response.data})
        });
    }

    render (){
        return (
            <div class="news">
                <h1 className = "text-center"> Новини клініки</h1>
                <table className = "table table-striped">
                
                    <tbody>
                        {
                            this.state.news.map(
                                news => 
                                <tr key = {news.id}>
                                       
                                     <td> {news.clinicNews}</td>   
                                     <td> {news.data}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default NewsComponent