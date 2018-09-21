import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Integration = (props) => {
    const post = props.post
    const url = `/integrations/${post.slug}/`

    return (
        <Link className="flex-grow-0 flex flex-column items-center w50 h40 tc link darkgrey" to={url}>
            <div className="flex justify-center items-center h10 w13 mb3">
                <img className="w-100 h-100" style={{ objectFit: `contain` }} src={post.feature_image} alt={post.title} />
            </div>
            <div>{post.title}</div>
        </Link>
    )
}

Integration.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Integration