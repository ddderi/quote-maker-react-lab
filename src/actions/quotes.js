// TODO: Create action creators as defined in tests

// example 

// export const addAuthor = author => {
//     return {
//       type: 'ADD_AUTHOR',
//       author
//     };
//   };

export const addQuote = quote => {
    return {
        type: 'ADD_QUOTE',
        quote: {
            ...quote, votes: 0
        }
    }
}

export const removeQuote = id => {
    return {
        type: 'REMOVE_QUOTE',
        id
    }
}

export const upvoteQuote = id => {
    return {
        type: 'UPVOTE_QUOTE',
        id
    }
}

export const downvoteQuote = id => {
    return {
        type: 'DOWNVOTE_QUOTE',
        id
    }
}