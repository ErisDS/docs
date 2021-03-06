import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import getPostExcerpt from '../../utils/getPostExcerpt'
import { Spirit } from '../../styles/spirit-styles'

const FAQLink = ({ post, section, title, children, to, className }) => {
    const url = post ? `/${section}/${post.slug}/` : to
    title = post ? post.title : title
    const excerpt = post ? getPostExcerpt(post) : children

    return (
        <Link to={url} className={className}>
            <h4 to={url} className={`${Spirit.excerpt} link darkgrey fw5`}>{title} &raquo;</h4>
            {excerpt ?
                <p className={`${Spirit.small} ma0 f8 lh-copy middarkgrey mb6`}>{excerpt}</p>
                : null
            }
        </Link>
    )
}
FAQLink.defaultProps = {
    className: `f5 db tdn mb6 faq-question bb b--whitegrey`,
    section: `faq`,
}

FAQLink.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string,
        slug: PropTypes.string,
    }),
    section: PropTypes.string.isRequired,
    title: PropTypes.string,
    children: PropTypes.node,
    to: PropTypes.string,
    className: PropTypes.string,
}

export default FAQLink
