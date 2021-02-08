//import React, {Component} from 'react'
//import Show from './components/Show'

class Admin extends React.Component {
    state = {
        number: 0,
        reviews:[]
    }

    componentDidMount = () => {
        axios.get('/api/reviews').then(
            (response) => {
                this.setState({
                    reviews:response.data
                })
                //console.log(this.state.reviews)
            }
        )
    }

    createReview = (event) => {
        event.preventDefault();
        axios.post(
            '/api/reviews',
            {
                name:this.state.newReviewName,
                comments:this.state.newReviewComment,
                pics:this.state.newReviewPics
            }
        ).then(
            (response) => {
                this.setState({
                    reviews:response.data
                })
            }
        )
        event.target.reset()
    }

    changeNewReviewComment = (event) => {
        this.setState({
            newReviewComment:event.target.value
        });
    }

    changeNewReviewName = (event) => {
        this.setState({
            newReviewName:event.target.value
        });
    }
    changeNewReviewPics = (event) => {
      this.setState({
        newReviewPics:event.target.value
      })
    }

    deleteReview = (event) => {
        axios.delete('/api/reviews/' + event.target.value).then(
            (response) => {
                this.setState({
                    reviews:response.data
                })
            }
        )

    }

    updateReview = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/api/reviews/' + id,
            {
                name:this.state.updateReviewName,
                comments:this.state.updateReviewComment,
                pics:this.state.updateReviewPics
            }
        ).then(
            (response) => {
                this.setState({
                    reviews:response.data,
                    name:'',
                    comments:'',
                    pics:''
                })
            }
        )
        event.target.reset()
        //window.location.reload(false);
    }

    changeUpdateReviewName = (event) => {
        this.setState(
            {
                updateReviewName:event.target.value
            }
        )
    }

    changeUpdateReviewComment = (event) => {
        this.setState(
            {
                updateReviewComment:event.target.value
            }
        )
    }

    changeUpdateReviewPics = (event) => {
      this.setState(
        {
          updateReviewPics:event.target.value
        }
      )
    }

    increase = (event)=>{
      this.setState({
        number: this.state.number +=1
      })
    }

    render = () => {
        return <div className='main' id='top'>
        <h1>TripleJ Admin Page</h1>
        <br />
        <button onClick={this.increase}>Likes:
        </button><h2>{this.state.number}</h2><br />

            <div className='container'>
                {
                    this.state.reviews.map(
                        (review, index) => {
                            return <div className='box' key={index}>
                            <img src={review.pics} /><br />
                            <div className='innerBox'>
                                <h4>--{review.name}<br />
                                <i>'{review.comments}'</i><br /><br />
                                Posted: {new Date(review.created_at).toLocaleDateString("en-US")}</h4><br />
                                <details><summary>Edit Post</summary>
                                <h5>Must Fill Out All Fields</h5>
                                <form id={review.id} onSubmit={this.updateReview}>
                                    <input onKeyUp={this.changeUpdateReviewName} type="text" placeholder='name' /><br/>
                                    <input onKeyUp={this.changeUpdateReviewComment} type="text" placeholder='comments'/><br/>
                                    <input onKeyUp={this.changeUpdateReviewPics} type='text' placeholder='img URL'/><br />

                                    <input type="submit" value="Update Review"/><br />
                                    <button className='delete' value={review.id} onClick={this.deleteReview}>DELETE REVIEW</button>
                                </form>
                                </details>
                                </div>
                            </div>
                        }
                    )
                }
            </div>
            <h2>Create New Review</h2>
            <form onSubmit={this.createReview}>
                <input onKeyUp={this.changeNewReviewName} type="text" placeholder="name" /><br/>
                <input onKeyUp={this.changeNewReviewComment} type="text" placeholder="comments" /><br/>
                <input onKeyUp={this.changeNewReviewPics} type='text' placeholder='image URL' /><br />
                <input type="submit" value="Create New Review" />
            </form><br />

            <a href='#top'>Back ToTop</a>
            <a href='/index.html'>
            Back To Main</a>
        </div>

    }
}

ReactDOM.render(
    <Admin></Admin>,

    document.querySelector('section')
)
