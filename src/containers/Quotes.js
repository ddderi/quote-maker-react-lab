import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props
    
  const quotesMap = quotes.map((data, index) => {return <QuoteCard downvoteQuote={downvoteQuote} upvoteQuote={upvoteQuote} quote={data} removeQuote={removeQuote} key={index} data={data} />})

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotesMap}
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     removeQuote: (id) => {
//       dispatch(removeQuote(id))
//     }
//   }
// }



const mapStateToProps = state => {
  return ({
    quotes: state.quotes
  })
}

//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
